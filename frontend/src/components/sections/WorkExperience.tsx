import Card from "@components/common/Card";
import Section from "@components/common/Section";
import SubSection from "@components/common/SubSection";

interface WorkExperienceProps {
  data: any[];
}

function WorkExperience({ data }: WorkExperienceProps) {
  return (
    <Section title="Work Experience">
      {data.map((exp) => (
        <Card
          key={exp.company}
          heading={exp.company}
          subHeading={exp.role}
          description={exp.description}
        >
          {exp.awardName && (
            <SubSection
              heading={exp.awardName}
              subHeading={exp.awardDescription}
            />
          )}
        </Card>
      ))}
    </Section>
  );
}

export default WorkExperience;
