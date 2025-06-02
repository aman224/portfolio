import type { RefObject } from "react";
import Section from "./Section";
import Card from "./Card";
import { education } from "../constants";
import SubSection from "./SubSection";

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
          subSection={
            <SubSection heading={"Grade Achieved"} subHeading={edu.grade} />
          }
        />
      ))}
    </Section>
  );
}

export default Education;
