package com.tech.employee.service;

import java.util.List;
import com.tech.employee.dto.EmployeeDTO;

public interface EmployeeService {

    EmployeeDTO create(EmployeeDTO dto);
    List<EmployeeDTO> getAll();
    EmployeeDTO getById(Long id);
    EmployeeDTO update(Long id, EmployeeDTO dto);
    void delete(Long id);
}