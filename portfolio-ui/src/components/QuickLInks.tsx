import { useContext } from "react";
import { ScrollContext } from "../contexts/ScrollContext";

function QuickLinks() {
  const { scrollToWorkExperience, scrollToProjects } =
    useContext(ScrollContext);

  return (
    <div className="quick-links">
      <div className="quick-links-item">
        <div className="quick-links-text" onClick={scrollToWorkExperience}>
          <p>See my Work Experience</p>
        </div>
      </div>
      <div className="quick-links-item" onClick={scrollToProjects}>
        <p>View my Projects</p>
      </div>
      <div className="quick-links-item">
        <p>Read my Resume</p>
      </div>
      <div className="quick-links-item">
        <p>Learn more About me</p>
      </div>
    </div>
  );
}

export default QuickLinks;
