import { projects } from "@constants";

import Card from "@components/common/Card";
import Section from "@components/common/Section";
import TechStack from "@components/common/TechStack";

function Projects() {
  return (
    <Section title="Projects">
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
