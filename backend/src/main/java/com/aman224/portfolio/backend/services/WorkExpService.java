package com.aman224.portfolio.backend.services;

import com.aman224.portfolio.backend.models.WorkExp;
import com.aman224.portfolio.backend.repositories.WorkExpRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkExpService {
    private final WorkExpRepository workExpRepository;

    public WorkExpService(WorkExpRepository workExpRepository) {
        this.workExpRepository = workExpRepository;
    }

    public List<WorkExp> getAllWorkExp() {
        return this.workExpRepository.findAll();
    }
}
