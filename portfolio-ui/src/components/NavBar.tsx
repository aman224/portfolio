import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function NavBar() {
  const iconSize = "medium";

  return (
    <div className="sidenav">
      <div className="nav-elem nav-search rounded-lg">
        <SearchRoundedIcon fontSize="large" />
      </div>
      <div className="nav-elem">
        <HomeRoundedIcon fontSize={iconSize} />
        <p>Home</p>
      </div>
      <div className="nav-elem">
        <CodeRoundedIcon fontSize={iconSize} />
        <p>Projects</p>
      </div>
      <div className="nav-elem">
        <SchoolRoundedIcon fontSize={iconSize} />
        <p>Education</p>
      </div>
      <div className="nav-elem justify-end">
        <InfoOutlinedIcon fontSize={iconSize} />
        <p>About</p>
      </div>
    </div>
  );
}

export default NavBar;
