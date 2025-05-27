import StackIcon from "tech-stack-icons";

interface TechStackProps {
  techStack: string[] | [];
}

function TechStack({ techStack = [] }: TechStackProps) {
  return (
    <div className="techstack">
      {techStack.map((item) => (
        <StackIcon name={item} className="stack-icon" />
      ))}
    </div>
  );
}

export default TechStack;
