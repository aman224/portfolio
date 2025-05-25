import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function HomeSocials() {
  const iconSize = "medium";

  return (
    <div className="home-socials">
      <div className="home-socials-item shadow-2xl">
        <div className="home-socials-item-icon">
          <ContactPageRoundedIcon fontSize={iconSize} />
        </div>
        <div className="home-socials-item-text">Resume</div>
      </div>
      <div className="home-socials-item">
        <div className="home-socials-item-icon">
          <LinkedInIcon fontSize={iconSize} />
        </div>
        <div className="home-socials-item-text">LinkedIn</div>
      </div>
      <div className="home-socials-item">
        <div className="home-socials-item-icon">
          <GitHubIcon fontSize={iconSize} />
        </div>
        <div className="home-socials-item-text">GitHub</div>
      </div>
      <div className="home-socials-item">
        <div className="home-socials-item-icon">
          <EmailRoundedIcon fontSize={iconSize} />
        </div>
        <div className="home-socials-item-text">Email</div>
      </div>
    </div>
  );
}

export default HomeSocials;
