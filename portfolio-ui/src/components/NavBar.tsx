import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { DarkModeRounded } from "@mui/icons-material";
import { navItems } from "../constants";

function NavBar() {
  const iconSize = "medium";
  const { theme, toggleTheme } = useContext(ThemeContext);

  const ThemeSwitcherIcon =
    theme === "dark" ? LightModeRoundedIcon : DarkModeRounded;

  return (
    <nav id="sidenav">
      <div className="nav-menu-icon">
        <MenuRoundedIcon fontSize={iconSize} />
        <h3>AO</h3>
      </div>
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
      <div className="nav-item nav-mode-switcher">
        <ThemeSwitcherIcon fontSize={iconSize} onClick={toggleTheme} />
      </div>
    </nav>
  );
}

export default NavBar;
