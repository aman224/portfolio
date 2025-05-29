import type { RefObject } from "react";
import { workExp } from "../constants";
import Card from "./Card";
import Section from "./Section";
import SubSection from "./SubSection";

interface WorkExperienceProps {
  ref?: RefObject<HTMLDivElement | null>;
}

function WorkExperience({ ref }: WorkExperienceProps) {
  return (
    <Section title="Work Experience" ref={ref}>
      {workExp.map((exp) => (
        <Card
          key={exp.company}
          heading={exp.company}
          subHeading={exp.role}
          description={exp.description}
          subSection={
            exp.award ? (
              <SubSection
                heading={exp.award}
                subHeading={exp.awardDescription}
              />
            ) : null
          }
        />
      ))}
    </Section>
  );
}

export default WorkExperience;
