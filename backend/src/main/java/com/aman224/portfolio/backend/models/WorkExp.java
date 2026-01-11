package com.aman224.portfolio.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class WorkExp {
    @Id
    private String company;
    private String role;
    private String description;
    private String awardName;
    private String awardDescription;

    public WorkExp() {}

    public WorkExp(String company, String role, String description, String awardName, String awardDescription) {
        this.company = company;
        this.role = role;
        this.description = description;
        this.awardName = awardName;
        this.awardDescription = awardDescription;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAwardName() {
        return awardName;
    }

    public void setAwardName(String awardName) {
        this.awardName = awardName;
    }

    public String getAwardDescription() {
        return awardDescription;
    }

    public void setAwardDescription(String awardDescription) {
        this.awardDescription = awardDescription;
    }
}
