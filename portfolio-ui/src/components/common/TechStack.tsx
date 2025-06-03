import StackIcon from "tech-stack-icons";

import styles from "./Common.module.css";

interface TechStackProps {
  techStack: string[] | [];
}

function TechStack({ techStack = [] }: TechStackProps) {
  return (
    <div>
      {techStack.map((item) => (
        <StackIcon key={item} name={item} className={styles.stackIcon} />
      ))}
    </div>
  );
}

export default TechStack;
