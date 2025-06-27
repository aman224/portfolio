import Card from "@components/common/Card";
import Section from "@components/common/Section";

function About() {
  return (
    <Section title="About" grid={false}>
      <Card>
        <div className="about-me">
          <div className="about-content">
            <p className="about-content-text">
              Hi, I'm Aman Ottakandathil. I'm a software engineer, and what
              truly excites me is the process of bringing web applications to
              life. I don't really have a favorite language; if there's a
              problem to solve or something new to learn, I'm all in! My journey
              has seen me primarily working with Java and JavaScript, building
              on AWS cloud platforms. Outside of the keyboard, I've spent time
              as a bartender – a role that surprisingly taught me a lot about
              quick thinking and handling unexpected challenges, skills I find
              invaluable in software development! And yes, this was indeed
              "polished" by good old Google's Gemini.
            </p>
          </div>
          <div className="about-img"></div>
        </div>
      </Card>

      <Card heading="About this Website" subHeading="[[ Still In Progress ]]">
        <div className="about-website">
          This website was developed by Aman using ReactJS and uses Material 3
          guidelines and color palettes
          <div>
            The beautiful Background Image's are by,{" "}
            <a href="https://unsplash.com/@23exe?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Alexander X.
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/dark-drapes-with-a-striking-pink-highlight-4DaOHtguLfw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>{" "}
            and{" "}
            <a href="https://unsplash.com/@plufow?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Plufow Le Studio
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/a-blurry-image-of-a-pink-and-blue-background-yJwL0bTYVs4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </div>
        </div>
      </Card>
    </Section>
  );
}

export default About;
