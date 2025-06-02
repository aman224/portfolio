interface CardProps {
  heading?: string;
  subHeading?: string;
  description?: string;
  subSection?: React.ReactNode;
}

function Card({ heading, subHeading, description, subSection }: CardProps) {
  return (
    <div className="card">
      {heading && (
        <div className="card-header">
          <h2>{heading}</h2>
          {subHeading && <h3>{subHeading}</h3>}
        </div>
      )}
      {description && <div className="card-text">{description}</div>}
      {subSection && <div className="card-sub-section">{subSection}</div>}
    </div>
  );
}

export default Card;
