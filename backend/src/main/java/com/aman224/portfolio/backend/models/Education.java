package com.aman224.portfolio.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Education {
    @Id
    private String university;
    private String course;
    private String grade;
    private String location;

    public Education() {}

    public Education(String university, String course, String grade, String location) {
        this.university = university;
        this.course = course;
        this.grade = grade;
        this.location = location;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
