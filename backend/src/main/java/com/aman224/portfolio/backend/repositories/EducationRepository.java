package com.aman224.portfolio.backend.repositories;

import com.aman224.portfolio.backend.models.Education;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationRepository extends JpaRepository<Education, String> {
}
