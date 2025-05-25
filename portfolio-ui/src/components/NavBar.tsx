import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

function NavBar() {
  const iconSize = "medium";

  return (
    <nav id="sidenav">
      <div className="nav-elem nav-search">
        <SearchRoundedIcon fontSize={iconSize} />
      </div>
      <div className="nav-elem">
        <HomeRoundedIcon fontSize={iconSize} />
        <p>Home</p>
      </div>
      <div className="nav-elem">
        <WorkRoundedIcon fontSize={iconSize} />
        <p>Experience</p>
      </div>
      <div className="nav-elem">
        <CodeRoundedIcon fontSize={iconSize} />
        <p>Projects</p>
      </div>
      <div className="nav-elem">
        <SchoolRoundedIcon fontSize={iconSize} />
        <p>Education</p>
      </div>
      <div className="nav-elem">
        <EmailRoundedIcon fontSize={iconSize} />
        <p>Contact</p>
      </div>
      <div className="nav-elem">
        <InfoOutlinedIcon fontSize={iconSize} />
        <p>About</p>
      </div>
      <div className="nav-elem nav-mode-switcher">
        <LightModeRoundedIcon fontSize={iconSize} />
      </div>
    </nav>
  );
}

export default NavBar;
