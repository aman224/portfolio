import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { DarkModeRounded } from "@mui/icons-material";
import { navItems } from "../constants";
import { ScrollContext } from "../contexts/ScrollContext";

function NavBar() {
  const iconSize = "medium";
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { scrollToWorkExperience, scrollToProjects, scrollToHome } =
    useContext(ScrollContext);

  const ThemeSwitcherIcon =
    theme === "dark" ? LightModeRoundedIcon : DarkModeRounded;

  const handleClick = (itemTitle: string) => {
    console.log(itemTitle);
    if (itemTitle === "Projects") {
      scrollToProjects();
    } else if (itemTitle === "Experience") {
      scrollToWorkExperience();
    } else if (itemTitle === "Home") {
      scrollToHome();
    }
  };

  return (
    <nav id="sidenav">
      <div className="nav-menu-header">
        <MenuRoundedIcon fontSize={iconSize} />
        <h3
          className="nav-menu-header-title"
          onClick={() => handleClick("Home")}
        >
          AO
        </h3>
      </div>
      {navItems.map((item) => (
        <div
          className="nav-item"
          key={item.title}
          onClick={() => handleClick(item.title)}
        >
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
