import styles from "./Common.module.css";

interface CardProps {
  heading?: string;
  subHeading?: string;
  description?: string;
  children?: React.ReactNode;
}

function Card({ heading, subHeading, description, children }: CardProps) {
  return (
    <div className={styles.card}>
      {heading && (
        <div className={styles.cardHeader}>
          <h2>{heading}</h2>
          {subHeading && <h3>{subHeading}</h3>}
        </div>
      )}
      {description && <div className={styles.cardText}>{description}</div>}
      {children && <div className={styles.cardChildren}>{children}</div>}
    </div>
  );
}

export default Card;
