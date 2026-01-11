import styles from "./Common.module.css";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  grid?: boolean;
}

function Section({ title, children, grid = true }: SectionProps) {
  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.sectionHeader}>{title}</h1>
      {grid ? (
        <div className={styles.cardContainerGrid}>{children}</div>
      ) : (
        <div className={styles.cardContainer}>{children}</div>
      )}
    </section>
  );
}

export default Section;
