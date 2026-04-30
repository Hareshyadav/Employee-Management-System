package com.tech.employee.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import com.tech.employee.dto.EmployeeDTO;
import com.tech.employee.entity.Employee;
import com.tech.employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeServiceImpl(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public EmployeeDTO create(EmployeeDTO dto) {
        Employee emp = mapToEntity(dto);
        return mapToDTO(repository.save(emp));
    }

    @Override
    public List<EmployeeDTO> getAll() {
        return repository.findAll().stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO getById(Long id) {
        Employee emp = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        return mapToDTO(emp);
    }

    @Override
    public EmployeeDTO update(Long id, EmployeeDTO dto) {
        Employee emp = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        emp.setName(dto.getName());
        emp.setEmail(dto.getEmail());
        emp.setDepartment(dto.getDepartment());
        emp.setSalary(dto.getSalary());

        return mapToDTO(repository.save(emp));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    private EmployeeDTO mapToDTO(Employee e) {
        return new EmployeeDTO(e.getId(), e.getName(), e.getEmail(), e.getDepartment(), e.getSalary());
    }

    private Employee mapToEntity(EmployeeDTO dto) {
        return new Employee(dto.getId(), dto.getName(), dto.getEmail(), dto.getDepartment(), dto.getSalary());
    }
}