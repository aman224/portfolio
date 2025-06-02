interface IconProps {
  type: string;
}

function Icon({ type }: IconProps) {
  return <span className="material-symbols-rounded">{type}</span>;
}

export default Icon;
