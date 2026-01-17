import "./App.css";
import "./styles/dark.css";
import "./styles/light.css";

import useLocalStorage from "use-local-storage";

import { Element, Events, scrollSpy } from "react-scroll";

import { useEffect, useState } from "react";

import { ThemeContext } from "./contexts/ThemeContext";

import NavBar from "@components/navigation/NavBar";
import Home from "@components/home/Home";
import WorkExperience from "@components/sections/WorkExperience";
import Projects from "@components/sections/Projects";
import Education from "@components/sections/Education";
import About from "@components/sections/About";
import { ApiService } from "./ApiService";
import type { PortfolioData } from "./ApiService";

import { workExp, projects, education } from "@constants";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [portfolioData, setPortfolioData] = useState<PortfolioData>();

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", () => { });
    Events.scrollEvent.register("end", () => { });

    scrollSpy.update();
    loadPortfolioData(false);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const loadPortfolioData = async (shouldFetch: boolean) => {
    try {
      let result: PortfolioData;
      if (shouldFetch) {
        result = await ApiService.getFullPortfolio();
      } else {
        result = {
          workExperience: workExp,
          projects: projects,
          education: education,
        };
        console.log(result);
      }
      setPortfolioData(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container" id={theme}>
        <NavBar />
        <div id="main">
          <Element name="homeSection" className="home-section">
            <Home />
          </Element>
          <Element name="workExpSection">
            <WorkExperience data={portfolioData?.workExperience || []} />
          </Element>
          <Element name="projectsSection">
            <Projects data={portfolioData?.projects || []} />
          </Element>
          <Element name="educationSection">
            <Education data={portfolioData?.education || []} />
          </Element>
          <Element name="aboutSection">
            <About />
          </Element>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
