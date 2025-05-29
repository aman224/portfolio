interface CardProps {
  heading: string;
  subHeading: string;
  description: string;
  subSection: React.ReactNode;
}

function Card({ heading, subHeading, description, subSection }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{heading}</h2>
        <h3>{subHeading}</h3>
      </div>
      <div className="card-text">{description}</div>
      {subSection ? <div className="card-sub-section">{subSection}</div> : null}
    </div>
  );
}

export default Card;
