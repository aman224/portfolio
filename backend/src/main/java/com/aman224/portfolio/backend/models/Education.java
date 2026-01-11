package com.aman224.portfolio.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Education {
    @Id
    private String university;
    private String degree;
    private String grade;

    public Education() {
    }

    public Education(String university, String degree, String grade) {
        this.university = university;
        this.degree = degree;
        this.grade = grade;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}
