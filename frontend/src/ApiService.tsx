import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/";

const api = axios.create({
  baseURL: BASE_URL,
});

export interface PortfolioData {
  workExperience: any[];
  projects: any[];
  education: any[];
}

export const ApiService = {
  getAllWorkExp: () => api.get("work-exp"),
  getAllProjects: () => api.get("projects"),
  getAllEducation: () => api.get("education"),

  async getFullPortfolio() {
    try {
      const [workRes, projectRes, eduRes] = await Promise.all([
        this.getAllWorkExp(),
        this.getAllProjects(),
        this.getAllEducation(),
      ]);

      return {
        workExperience: workRes.data,
        projects: projectRes.data,
        education: eduRes.data,
      };
    } catch (error) {
      console.error("Error consolidating API data:", error);
      throw error;
    }
  },
};
