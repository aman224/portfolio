import type { RefObject } from "react";
import { workExp } from "@constants";

import Card from "@components/common/Card";
import Section from "@components/common/Section";
import SubSection from "@components/common/SubSection";

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
        >
          {exp.award && (
            <SubSection heading={exp.award} subHeading={exp.awardDescription} />
          )}
        </Card>
      ))}
    </Section>
  );
}

export default WorkExperience;
