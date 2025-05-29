import type { RefObject } from "react";
import { projects } from "../constants";
import Card from "./Card";
import Section from "./Section";
import TechStack from "./TechStack";

interface ProjectsProps {
  ref?: RefObject<HTMLDivElement | null>;
}

function Projects({ ref }: ProjectsProps) {
  return (
    <Section title="Projects" ref={ref}>
      {projects.map((project) => (
        <Card
          key={project.title}
          heading={project.title}
          subHeading=""
          description={project.description}
          subSection={<TechStack techStack={project.stack} />}
        ></Card>
      ))}
    </Section>
  );
}

export default Projects;
