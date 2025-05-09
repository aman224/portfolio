import Header from "./Header";

function StartMenu() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="sections-container">
          <div className="section-grid">
            <h2 className="section-title"></h2>
            <div className="elem big">About Me</div>
            <div className="two-elem-grid">
              <div className="elem small">LinkedIn</div>
              <div className="elem small">GitHub</div>
            </div>
            <div className="elem big">CV</div>
          </div>
          <div className="section-grid">
            <h2 className="section-title">Projects</h2>
            <div className="elem big">Leap Analysis</div>
            <div className="elem big">Distributed Tracing Framework</div>
            <div className="two-elem-grid">
              <div className="elem small">Terminal Text Editor</div>
              <div className="elem small">Project Management Website</div>
            </div>
          </div>
          <div className="section-grid">
            <h2 className="section-title">Work Experience</h2>
            <div className="elem big">Dexlock Technologies</div>
          </div>
          <div className="section-grid">
            <h2 className="section-title">Education</h2>
            <div className="elem big">
              <div className="elem-text">The University Of Leeds</div>
            </div>
            <div className="elem big">Government Model Engineering College</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartMenu;
