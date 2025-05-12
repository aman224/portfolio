type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title = "", children }: SectionProps) {
  return (
    <div className="section-grid">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  );
}

export default Section;
