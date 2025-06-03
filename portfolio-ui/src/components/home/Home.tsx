import styles from "./Home.module.css";

import QuickLinks from "./QuickLinks";
import Socials from "@components/common/Socials";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homePrimary}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>
            <span className={styles.headerTitlePre}>HEY, I'M </span>
            <span className={styles.headerTitleName}>AMAN</span>
          </h1>
          <div className={styles.headerText}>
            <p>
              I'm a software Engineer and I love solving technical problems and
              building/deploying web application on the cloud
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
