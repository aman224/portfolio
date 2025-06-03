import { education } from "@constants";

import Card from "@components/common/Card";
import Section from "@components/common/Section";
import SubSection from "@components/common/SubSection";

function Education() {
  return (
    <Section title="Education">
      {education.map((edu) => (
        <Card
          key={edu.title}
          heading={edu.title}
          subHeading={edu.course}
          description=""
        >
          <SubSection heading={"Grade Achieved"} subHeading={edu.grade} />
        </Card>
      ))}
    </Section>
  );
}

export default Education;
