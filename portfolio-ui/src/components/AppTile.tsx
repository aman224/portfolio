type TileProps = {
  size?: "small" | "big";
  title: string;
};

function AppTile({ size = "small", title }: TileProps) {
  return (
    <>
      <div className="tile" style={{ width: getWidth(size) }}>
        {title}
      </div>
    </>
  );
}

function getWidth(size: string): string {
  if (size === "big") {
    return "42.5vh";
  } else {
    return "21vh";
  }
}

export default AppTile;
