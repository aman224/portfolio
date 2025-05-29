import { workExp } from "../constants";
import Card from "./Card";
import Section from "./Section";
import SubSection from "./SubSection";

function WorkExperience() {
  return (
    <Section title="Work Experience">
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
