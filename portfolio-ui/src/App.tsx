import "./App.css";
import "./styles/dark.css";
import "./styles/light.css";

import useLocalStorage from "use-local-storage";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

import { ThemeContext } from "./contexts/ThemeContext";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import { ScrollContext } from "./contexts/ScrollContext";
import { useRef } from "react";
import { HomeWork } from "@mui/icons-material";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const homeRef = useRef<HTMLDivElement>(null);
  const workExpRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollContext = {
    scrollToHome: () => {
      if (homeRef) {
        homeRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    scrollToWorkExperience: () => scrollToSection(workExpRef),
    scrollToProjects: () => scrollToSection(projectsRef),
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ScrollContext.Provider value={scrollContext}>
        <div className="app-container" id={theme}>
          <NavBar />
          <div className="content" ref={homeRef}>
            <Home />
            <WorkExperience ref={workExpRef} />
            <Projects ref={projectsRef} />
          </div>
        </div>
      </ScrollContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
