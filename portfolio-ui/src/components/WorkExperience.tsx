import { workExp } from "../constants";
import TechStack from "./TechStack";

function WorkExperience() {
  return (
    <div className="section-container">
      <h1 className="section-heading">Work Experience</h1>
      <div className="card-container">
        {workExp.map((exp) => (
          <div className="card">
            <div className="card-header">
              <h2>{exp.company}</h2>
              <h3>{exp.role}</h3>
            </div>
            <div className="card-text">{exp.description}</div>
            <div className="card-sub-section">
              <TechStack techStack={exp.stack} />
            </div>
            <div className="card-sub-section">
              <h4>{exp.award}</h4>
              {exp.awardDescription}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
