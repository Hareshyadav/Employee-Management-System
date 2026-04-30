package com.tech.employee.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.tech.employee.dto.EmployeeDTO;
import com.tech.employee.service.EmployeeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @PostMapping("/add-employee")
    public EmployeeDTO create(@RequestBody EmployeeDTO dto) {
        return service.create(dto);
    }

    @GetMapping("/all-employee")
    public List<EmployeeDTO> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public EmployeeDTO getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public EmployeeDTO update(@PathVariable Long id, @RequestBody EmployeeDTO dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Deleted Successfully";
    }
}