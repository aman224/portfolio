interface CardProps {
  heading?: string;
  subHeading?: string;
  description?: string;
  children?: React.ReactNode;
}

function Card({ heading, subHeading, description, children }: CardProps) {
  return (
    <div className="card">
      {heading && (
        <div className="card-header">
          <h2>{heading}</h2>
          {subHeading && <h3>{subHeading}</h3>}
        </div>
      )}
      {description && <div className="card-text">{description}</div>}
      {children && <div className="card-sub-section">{children}</div>}
    </div>
  );
}

export default Card;
