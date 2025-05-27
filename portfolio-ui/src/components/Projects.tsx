import { projects } from "../constants";
import Card from "./Card";
import Section from "./Section";
import TechStack from "./TechStack";

function Projects() {
  return (
    <Section title="Projects">
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
