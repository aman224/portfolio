import type { RefObject } from "react";
import { education } from "@constants";

import Card from "@components/common/Card";
import Section from "@components/common/Section";
import SubSection from "@components/common/SubSection";

interface EducationProps {
  ref?: RefObject<HTMLDivElement | null>;
}

function Education({ ref }: EducationProps) {
  return (
    <Section title="Education" ref={ref}>
      {education.map((edu) => (
        <Card
          key={edu.title}
          heading={edu.title}
          subHeading={edu.course}
          description=""
          children={
            <SubSection heading={"Grade Achieved"} subHeading={edu.grade} />
          }
        />
      ))}
    </Section>
  );
}

export default Education;
