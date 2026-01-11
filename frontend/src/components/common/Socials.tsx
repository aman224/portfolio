import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

import styles from "./Common.module.css";

function Socials() {
  const iconSize = "medium";

  return (
    <div className={styles.socials}>
      <div className={styles.socialsTitle}>
        <h2>SOCIAL'S</h2>
      </div>
      <a href="https://www.linkedin.com/in/aman-o/">
        <div className={styles.socialsItem}>
          <LinkedInIcon fontSize={iconSize} />
        </div>
      </a>
      <a href="https://github.com/aman224">
        <div className={styles.socialsItem}>
          <GitHubIcon fontSize={iconSize} />
        </div>
      </a>
      <a href="mailto:amanclct@gmail.com">
        <div className={styles.socialsItem}>
          <EmailRoundedIcon fontSize={iconSize} />
        </div>
      </a>
      <a href="https://www.instagram.com/amanfreal">
        <div className={styles.socialsItem}>
          <InstagramIcon fontSize={iconSize} />
        </div>
      </a>
    </div>
  );
}

export default Socials;
