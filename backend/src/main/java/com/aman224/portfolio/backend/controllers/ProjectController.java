package com.aman224.portfolio.backend.controllers;


import com.aman224.portfolio.backend.models.Project;
import com.aman224.portfolio.backend.services.ProjectService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/projects")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    private List<Project> getAllProjects() {
        return this.projectService.getAllProjects();
    }
}
