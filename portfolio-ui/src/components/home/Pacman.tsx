import styles from "./Home.module.css";

function Pacman() {
  return (
    <iframe
      src="./pacman/index.html"
      title="Pacman Game"
      width="100%"
      className={styles.pacmanContainer}
    />
  );
}

export default Pacman;
