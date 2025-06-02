import { useContext } from "react";
import { ThemeContext } from "@contexts/ThemeContext";
import { ScrollContext } from "@contexts/ScrollContext";

import Icon from "@components/common/Icon";
import { navItems } from "@constants";

import styles from "./NavBar.module.css";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {
    scrollToWorkExperience,
    scrollToProjects,
    scrollToHome,
    scrollToEducation,
  } = useContext(ScrollContext);

  const handleClick = (itemTitle: string) => {
    if (itemTitle === "Projects") {
      scrollToProjects();
    } else if (itemTitle === "Experience") {
      scrollToWorkExperience();
    } else if (itemTitle === "Home") {
      scrollToHome();
    } else if (itemTitle === "Education") {
      scrollToEducation();
    }
  };

  return (
    <nav className={styles.sidenav}>
      <div className={styles.navHeader}>
        <Icon type="menu" />
        <h3
          className={styles.navHeaderTitle}
          onClick={() => handleClick("Home")}
        >
          AO
        </h3>
      </div>

      {navItems.map((item) => (
        <div
          className={styles.navItem}
          key={item.title}
          onClick={() => handleClick(item.title)}
        >
          <div
            className={`${styles.navItemIcon} ${
              item.title === "Home" && styles.navItemSelected
            }`}
          >
            <Icon type={item.type} />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
      <div
        className={`${styles.navItem} ${styles.navModeSwitcher}`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Icon type="light_mode" />
        ) : (
          <Icon type="dark_mode" />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
