import styles from "./Home.module.css";

import { useContext } from "react";

import { ScrollContext } from "@contexts/ScrollContext";

function QuickLinks() {
  const { scrollToWorkExperience, scrollToProjects } =
    useContext(ScrollContext);

  return (
    <div className={styles.quickLinks}>
      <div className={styles.quickLinksItem} onClick={scrollToWorkExperience}>
        <p>See my Work Experience</p>
      </div>
      <div className={styles.quickLinksItem} onClick={scrollToProjects}>
        <p>View my Projects</p>
      </div>
      <div className={styles.quickLinksItem}>
        <p>Download my Resume</p>
      </div>
      <div className={styles.quickLinksItem}>
        <p>Learn more About me</p>
      </div>
    </div>
  );
}

export default QuickLinks;
