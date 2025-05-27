import HomeSocials from "./HomeSocials";
import QuickLinks from "./QuickLInks";

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="header-title">Hey, I'm Aman</h1>
        <p className="header-subtext">
          A Software Engineer passionate about building and deploying web
          applications on AWS and Azure. I excel in agile teams to deliver
          solutions, resolve complex challenges, and optimize infrastructure.
        </p>
      </div>
      <QuickLinks />
      <HomeSocials />
    </div>
  );
}

export default Home;
