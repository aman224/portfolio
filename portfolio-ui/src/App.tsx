import "./App.css";
import "./styles/dark.css";
import "./styles/light.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

import { ThemeContext } from "./components/ThemeContext";

import { useState } from "react";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container" id={theme}>
        <NavBar />
        <div className="content">
          <Home />
          <WorkExperience />
          <Projects />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
