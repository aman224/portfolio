import Header from "./Header";
import AppTile from "./AppTile";
import SubGrid from "./SubGrid";
import Section from "./Section";

function StartMenu() {
  return (
    <div className="root-container w-full">
      <Header />
      <div className="sections-container justify-center sm:justify-start">
        <Section title="">
          <AppTile size="big" title="About Me" />
          <SubGrid>
            <AppTile size="small" title="Linkedin" />
            <AppTile size="small" title="GitHub" />
          </SubGrid>
          <AppTile size="big" title="CV" />
        </Section>

        <Section title="Projects">
          <AppTile size="big" title="Leap Analysis" />
          <AppTile size="big" title="Distributed Tracing Framework" />
          <SubGrid>
            <AppTile size="small" title="Terminal Text Editor" />
            <AppTile size="small" title="Project Management Website" />
          </SubGrid>
        </Section>

        <Section title="Work Experience">
          <AppTile size="big" title="Dexlock Technologies" />
          <AppTile size="big" title="Cloudium Software" />
        </Section>

        <Section title="Education">
          <AppTile size="big" title="The University Of Leeds" />
          <AppTile size="big" title="Government Model Engineering College" />
        </Section>
      </div>
    </div>
  );
}

export default StartMenu;
