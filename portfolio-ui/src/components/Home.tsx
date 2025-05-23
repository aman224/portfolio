import StackIcon from "tech-stack-icons";

function Home() {
  return (
    <div className="home-content">
      <h1 className="header">Hey, I'm Aman</h1>
      <p className="header-subtext">
        A Software Engineer passionate about building and deploying web
        applications on AWS and Azure. I excel in agile teams to deliver
        solutions, resolve complex challenges, and optimize infrastructure.
      </p>
      <div className="home-techstack">
        <StackIcon name="java" />
        <StackIcon name="python" />
        <StackIcon name="js" />
        <StackIcon name="reactjs" />
        <StackIcon name="nodejs" />
        <StackIcon name="spring" />
        <StackIcon name="aws" />
        <StackIcon name="azure" />
        <StackIcon name="kubernetes" />
        <StackIcon name="docker" />
        <StackIcon name="mysql" />
        <StackIcon name="mongodb" />
        <StackIcon name="elastic" />
        <StackIcon name="grafana" />
        <StackIcon name="kibana" />
        <StackIcon name="vim" />
        <StackIcon name="linux" />
      </div>
    </div>
  );
}

export default Home;
