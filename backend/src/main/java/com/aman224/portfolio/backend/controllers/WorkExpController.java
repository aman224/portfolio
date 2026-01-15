package com.aman224.portfolio.backend.controllers;

import com.aman224.portfolio.backend.models.WorkExp;
import com.aman224.portfolio.backend.services.WorkExpService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
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

    @GetMapping("/insert")
    private void insertWorkExp() {
        WorkExp workExp = new WorkExp("Dexlock Technologies", "Software Engineer", "Developed and maintained full-stack solutions including enterprise web applications, web scraping tools, and CI/CD pipelines, while managing and monitoring cloud and underlying hardware infrastructure", "Most Valuable Player", "Awarded for outstanding contributions and top performance in Q4 2021");
        this.workExpService.insert(workExp);
    }

}
