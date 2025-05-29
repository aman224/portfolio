import type { RefObject } from "react";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  ref?: RefObject<HTMLDivElement | null>;
}

function Section({ title, children, ref }: SectionProps) {
  return (
    <div className="section-container" ref={ref}>
      <h1 className="section-heading">{title}</h1>
      <div className="card-container">{children}</div>
    </div>
  );
}

export default Section;
