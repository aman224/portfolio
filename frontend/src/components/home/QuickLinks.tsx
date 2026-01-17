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
        className={`${styles.quickLinksItem} ${styles.quickLinksItemBlue}`}
      >
        <p>See my Work Experience</p>
      </Link>
      <Link
        to={"projectsSection"}
        offset={-12}
        duration={500}
        smooth={true}
        containerId="main"
        className={`${styles.quickLinksItem} ${styles.quickLinksItemPurple}`}
      >
        <p>View my Projects</p>
      </Link>
      <a href={"src/assets/Aman_CV.pdf"} download="Aman_CV.pdf">
        <div className={`${styles.quickLinksItem} ${styles.quickLinksItemBlue}`}>
          Download my Resume
        </div>
      </a>

      <Link
        to={"aboutSection"}
        offset={-12}
        duration={500}
        smooth={true}
        containerId="main"
        className={`${styles.quickLinksItem} ${styles.quickLinksItemPurple}`}
      >
        <p>Learn more About me</p>
      </Link>
    </div>
  );
}

export default QuickLinks;
