interface SubSectionProps {
  heading: string;
  subHeading: string;
}

function SubSection({ heading, subHeading }: SubSectionProps) {
  return (
    <>
      <h4>{heading}</h4>
      <span>{subHeading}</span>
    </>
  );
}

export default SubSection;
