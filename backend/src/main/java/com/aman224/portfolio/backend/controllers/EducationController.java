package com.aman224.portfolio.backend.controllers;

import com.aman224.portfolio.backend.models.Education;
import com.aman224.portfolio.backend.services.EducationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/education")
public class EducationController {
    private final EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @GetMapping
    private List<Education> getAllEducation() {
        return this.educationService.getAllEducation();
    }
}
