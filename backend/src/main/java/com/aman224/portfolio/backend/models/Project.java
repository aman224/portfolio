package com.aman224.portfolio.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.List;

@Entity
public class Project {
    @Id
    private String name;
    private String subtext;
    private String description;

    @Column(name = "stack")
    @JsonProperty("stack")
    private List<String> technologyStack;
    private String link;

    public Project() {}

    public Project(String name, String subtext, String description, List<String> technologyStack, String link) {
        this.name = name;
        this.subtext = subtext;
        this.description = description;
        this.technologyStack = technologyStack;
        this.link = link;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubtext() {
        return subtext;
    }

    public void setSubtext(String subtext) {
        this.subtext = subtext;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getTechnologyStack() {
        return technologyStack;
    }

    public void setTechnologyStack(List<String> technologyStack) {
        this.technologyStack = technologyStack;
    }

    public String getLink() {
        return link;
    }

    public void setList(String link) {
        this.link = link;
    }
}
