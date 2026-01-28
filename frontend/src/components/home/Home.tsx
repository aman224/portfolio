import Pacman from "@components/Pacman";
import styles from "./Home.module.css";

import QuickLinks from "./QuickLinks";
import Socials from "@components/common/Socials";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homePrimary}>
        <div className={styles.header}>
          <div className={styles.headerMain}>
            <h1 className={styles.headerTitle}>
              <span className={styles.headerTitlePre}>HEY, I'M </span>
              <span className={styles.headerTitleName}>AMAN</span>
            </h1>
            <Pacman />
          </div>

          <div className={styles.headerText}>
            <p>
              <span className={styles.headerSubTitleName}>Hey, I'm Aman</span> A software engineer with a passion for
              solving complex technical problems and building robust, scalable
              web applications on the cloud.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.homeSecondary}>
        <QuickLinks />
        <Socials />
      </div>
    </div>
  );
}

export default Home;
