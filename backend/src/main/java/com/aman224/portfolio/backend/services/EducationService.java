package com.aman224.portfolio.backend.services;

import com.aman224.portfolio.backend.models.Education;
import com.aman224.portfolio.backend.repositories.EducationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationService {
    private final EducationRepository educationRepository;

    public EducationService(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    public List<Education> getAllEducation() {
        return this.educationRepository.findAll();
    }
}
