import styles from "./NavBar.module.css";

import { useContext } from "react";
import { Link } from "react-scroll";

import { ThemeContext } from "@contexts/ThemeContext";

import Icon from "@components/common/Icon";
import { navItems } from "@constants";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.sidenav}>
      <div className={styles.navHeader}>
        <Icon type="menu" />
        <Link to="homeSection" offset={-64} smooth={true} containerId="main">
          <h3 className={styles.navHeaderTitle}>AO</h3>
        </Link>
      </div>

      {navItems.map((item) => (
        <div className={styles.navItem} key={item.title}>
          <Link
            to={item.target}
            spy={true}
            offset={-80}
            duration={500}
            smooth={true}
            activeClass={styles.navItemSelected}
            className={styles.navItemIcon}
            containerId="main"
          >
            <Icon type={item.type} />
          </Link>
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
