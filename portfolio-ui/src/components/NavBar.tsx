import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { DarkModeRounded } from "@mui/icons-material";
import { navItems } from "../constants/navItems";

function NavBar() {
  const iconSize = "medium";
  const { theme, toggleTheme } = useContext(ThemeContext);

  const ThemeSwitcherIcon =
    theme === "dark" ? LightModeRoundedIcon : DarkModeRounded;

  return (
    <nav id="sidenav">
      {navItems.map((item) => (
        <div className="nav-item" key={item.title}>
          <div
            className={
              "nav-item-icon" +
              (item.title === "Home" ? " nav-item-selected" : "")
            }
          >
            <item.icon fontSize={iconSize} />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
      <div className="nav-elem nav-mode-switcher">
        <ThemeSwitcherIcon fontSize={iconSize} onClick={toggleTheme} />
      </div>
    </nav>
  );
}

export default NavBar;
