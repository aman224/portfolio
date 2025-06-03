import styles from "./Home.module.css";

import { Link } from "react-scroll";

function QuickLinks() {
  return (
    <div className={styles.quickLinks}>
      <Link
        to={"workExpSection"}
        offset={-12}
        duration={500}
        smooth={true}
        containerId="main"
        className={styles.quickLinksItem}
      >
        <p>See my Work Experience</p>
      </Link>
      <Link
        to={"projectsSection"}
        offset={-12}
        duration={500}
        smooth={true}
        containerId="main"
        className={styles.quickLinksItem}
      >
        <p>View my Projects</p>
      </Link>
      <div className={styles.quickLinksItem}>
        <a href={"src/assets/Aman_CV.pdf"} download="Aman_CV.pdf">
          Download my Resume
        </a>
      </div>
      <Link
        to={"aboutSection"}
        offset={-12}
        duration={500}
        smooth={true}
        containerId="main"
        className={styles.quickLinksItem}
      >
        <p>Learn more About me</p>
      </Link>
    </div>
  );
}

export default QuickLinks;
