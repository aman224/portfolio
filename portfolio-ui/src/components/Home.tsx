import HomeSocials from "./HomeSocials";
import QuickLinks from "./QuickLInks";

function Home() {
  return (
    <div className="home-container">
      <div className="home-primary-section">
        <div className="header">
          <h1 className="header-title">
            <span className="header-title-pre">HEY, I'M </span>
            <span className="header-title-name">AMAN</span>
          </h1>
          <div className="header-subtext">
            <p>
              I'm a software Engineer and I love solving technical problems and
              building/deploying web application on the cloud
            </p>
          </div>
        </div>
      </div>
      <div className="home-secondary-section">
        <QuickLinks />
        <HomeSocials />
      </div>
    </div>
  );
}

export default Home;
