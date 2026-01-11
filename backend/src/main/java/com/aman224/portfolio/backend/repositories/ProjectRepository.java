package com.aman224.portfolio.backend.repositories;

import com.aman224.portfolio.backend.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, String> {

}
