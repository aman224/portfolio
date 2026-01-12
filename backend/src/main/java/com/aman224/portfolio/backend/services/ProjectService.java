package com.aman224.portfolio.backend.services;

import com.aman224.portfolio.backend.models.Project;
import com.aman224.portfolio.backend.repositories.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return this.projectRepository.findAll();
    }
}
