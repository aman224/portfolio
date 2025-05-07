import Header from "./Header";

function StartMenu() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="grid">
          <div className="elem big">Resume</div>
          <div className="elem small">Projects</div>
          <div className="elem big">Education</div>
          <div className="elem small">LinkedIn</div>
          <div className="elem big">Github</div>
          <div className="elem big">Time</div>
          <div className="elem big"></div>
          <div className="elem small"></div>
          <div className="elem big"></div>
          <div className="elem small"></div>
          <div className="elem big"></div>
          <div className="elem big"></div>
          <div className="elem big"></div>
          <div className="elem small"></div>
          <div className="elem small"></div>
        </div>
      </div>
    </>
  );
}

export default StartMenu;
