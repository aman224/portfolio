import type { RefObject } from "react";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  grid?: boolean;
  ref?: RefObject<HTMLDivElement | null>;
}

function Section({ title, children, grid = true, ref }: SectionProps) {
  return (
    <div className="section-container" ref={ref}>
      <h1 className="section-header">{title}</h1>
      {grid ? (
        <div className="card-container-grid">{children}</div>
      ) : (
        <div className="card-container">{children}</div>
      )}
    </div>
  );
}

export default Section;
