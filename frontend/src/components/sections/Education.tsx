import Card from "@components/common/Card";
import Section from "@components/common/Section";
import SubSection from "@components/common/SubSection";

interface EducationProps {
  data: any[];
}

function Education({ data }: EducationProps) {
  return (
    <Section title="Education">
      {data.map((edu) => (
        <Card
          key={edu.university}
          heading={edu.university}
          subHeading={edu.course}
        >
          <SubSection heading={"Grade Achieved"} subHeading={edu.grade} />
        </Card>
      ))}
    </Section>
  );
}

export default Education;
