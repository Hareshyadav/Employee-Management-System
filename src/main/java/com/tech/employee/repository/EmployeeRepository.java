package com.tech.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tech.employee.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}