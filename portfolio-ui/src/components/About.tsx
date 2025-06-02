import type { RefObject } from "react";
import Section from "./Section";
import Card from "./Card";
import HomeSocials from "./HomeSocials";

interface AboutProps {
  ref?: RefObject<HTMLDivElement | null>;
}

function About({ ref }: AboutProps) {
  return (
    <Section title="About" grid={false} ref={ref}>
      <Card
        subSection={
          <div className="about-me">
            <div className="about-content">
              <p className="about-content-text">
                Hey, I'm Aman Ottakandathil. You can just call me Aman. I am a
                software engineer passionate about building web application in
                any language honestly. I love learnig something new so I am
                always open to learning new technologies and languages. I have
                previously primarily worked on Java and JavaScript along with
                AWS for cloud services. I am also a bartender if that helps
              </p>
            </div>
            <div className="about-img"></div>
          </div>
        }
      />
      <Card
        heading="About this Website"
        subSection={
          <div>
            This website was developed with love by Aman using ReactJS and
            Material 3 guidelines and colours.
            <div>
              Background Image's by,
              <div>
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
              <div>Icons from Material UI</div>
            </div>
          </div>
        }
      />
      <Card
        heading="Contact"
        subSection={
          <div>
            <div>
              Find me on <HomeSocials />
            </div>
          </div>
        }
      />
    </Section>
  );
}

export default About;
