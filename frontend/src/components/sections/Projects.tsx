import Card from "@components/common/Card";
import Section from "@components/common/Section";
import TechStack from "@components/common/TechStack";

interface ProjectProps {
  data: any[];
}

function Projects({ data }: ProjectProps) {
  return (
    <Section title="Projects">
      {data.map((project) => (
        <Card
          key={project.name}
          heading={project.name}
          description={project.description}
          subHeading={project.subtext}
          link={project.link}
        >
          <TechStack techStack={project.stack} />
        </Card>
      ))}
    </Section>
  );
}

export default Projects;
