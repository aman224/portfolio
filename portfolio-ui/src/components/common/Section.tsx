interface SectionProps {
  title: string;
  children?: React.ReactNode;
  grid?: boolean;
  maxvh?: boolean;
}

function Section({ title, children, grid = true, maxvh }: SectionProps) {
  const sectionClass = maxvh
    ? "section-container full-height"
    : "section-container";

  return (
    <section className={sectionClass}>
      <h1 className="section-header">{title}</h1>
      {grid ? (
        <div className="card-container-grid">{children}</div>
      ) : (
        <div className="card-container">{children}</div>
      )}
    </section>
  );
}

export default Section;
