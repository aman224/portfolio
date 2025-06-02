import type { RefObject } from "react";
import { projects } from "@constants";

import Card from "@components/common/Card";
import Section from "@components/common/Section";
import TechStack from "@components/common/TechStack";

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
          description={project.description}
        >
          <TechStack techStack={project.stack} />
        </Card>
      ))}
    </Section>
  );
}

export default Projects;
