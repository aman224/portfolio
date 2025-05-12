import Header from "./Header";
import AppTile from "./AppTile";

function StartMenu() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="sections-container">
          <div className="section-grid">
            <h2 className="section-title"></h2>
            <AppTile size="big" title="About Me" />
            <div className="two-elem-grid">
              <AppTile size="small" title="Linkedin" />
              <AppTile size="small" title="GitHub" />
            </div>
            <AppTile size="big" title="CV" />
          </div>
          <div className="section-grid">
            <h2 className="section-title">Projects</h2>
            <AppTile size="big" title="Leap Analysis" />
            <AppTile size="big" title="Distributed Tracing Framework" />
            <div className="two-elem-grid">
              <AppTile size="small" title="Terminal Text Editor" />
              <AppTile size="small" title="Project Management Website" />
            </div>
          </div>
          <div className="section-grid">
            <h2 className="section-title">Work Experience</h2>
            <AppTile size="big" title="Dexlock Technologies" />
          </div>
          <div className="section-grid">
            <h2 className="section-title">Education</h2>
            <AppTile size="big" title="The University Of Leeds" />
            <AppTile size="big" title="Government Model Engineering College" />
          </div>
        </div>
      </div>
    </>
  );
}

export default StartMenu;
