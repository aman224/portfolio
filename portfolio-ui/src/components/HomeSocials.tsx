import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

function HomeSocials() {
  const iconSize = "medium";

  return (
    <div className="home-socials">
      <div className="home-socials-title">
        <h2>SOCIAL'S</h2>
      </div>
      <div className="home-socials-content">
        <div className="home-socials-item">
          <LinkedInIcon fontSize={iconSize} />
        </div>
        <div className="home-socials-item">
          <GitHubIcon fontSize={iconSize} />
        </div>
        <div className="home-socials-item">
          <EmailRoundedIcon fontSize={iconSize} />
        </div>
        <div className="home-socials-item">
          <InstagramIcon fontSize={iconSize} />
        </div>
      </div>
    </div>
  );
}

export default HomeSocials;
