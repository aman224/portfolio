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
      <a href="https://www.linkedin.com/in/aman-o/">
        <div className="home-socials-item">
          <LinkedInIcon fontSize={iconSize} />
        </div>
      </a>
      <a href="https://github.com/aman224">
        <div className="home-socials-item">
          <GitHubIcon fontSize={iconSize} />
        </div>
      </a>
      <a href="mailto:amanclct@gmail.com">
        <div className="home-socials-item">
          <EmailRoundedIcon fontSize={iconSize} />
        </div>
      </a>
      <a href="https://www.instagram.com/amanfreal">
        <div className="home-socials-item">
          <InstagramIcon fontSize={iconSize} />
        </div>
      </a>
    </div>
  );
}

export default HomeSocials;
