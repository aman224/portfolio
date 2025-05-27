interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="section-container">
      <h1 className="section-heading">{title}</h1>
      <div className="card-container">{children}</div>
    </div>
  );
}

export default Section;
