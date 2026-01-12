import "./App.css";
import "./styles/dark.css";
import "./styles/light.css";

import useLocalStorage from "use-local-storage";

import { Element, Events, scrollSpy } from "react-scroll";

import { useEffect } from "react";

import { ThemeContext } from "./contexts/ThemeContext";

import NavBar from "@components/navigation/NavBar";
import Home from "@components/home/Home";
import WorkExperience from "@components/sections/WorkExperience";
import Projects from "@components/sections/Projects";
import Education from "@components/sections/Education";
import About from "@components/sections/About";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container" id={theme}>
        <NavBar />
        <div id="main">
          <Element name="homeSection" className="home-section">
            <Home />
          </Element>
          <Element name="workExpSection">
            <WorkExperience />
          </Element>
          <Element name="projectsSection">
            <Projects />
          </Element>
          <Element name="educationSection">
            <Education />
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
