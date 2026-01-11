package com.aman224.portfolio.backend.controllers;

import com.aman224.portfolio.backend.models.WorkExp;
import com.aman224.portfolio.backend.services.WorkExpService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/work-exp")
public class WorkExpController {
    private final WorkExpService workExpService;

    public WorkExpController(WorkExpService workExpService) {
        this.workExpService = workExpService;
    }

    @GetMapping
    private List<WorkExp> getAllWorkExp() {
        return this.workExpService.getAllWorkExp();
    }
}
