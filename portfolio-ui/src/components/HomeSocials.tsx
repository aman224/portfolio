import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function HomeSocials() {
  const iconSize = "medium";

  return (
    <div className="home-socials">
      <div className="home-socials-item">
        <ContactPageRoundedIcon fontSize={iconSize} />
        <h3 className="home-socials-item-text socials-resume-text">Resume</h3>
      </div>
      <div className="home-socials-item">
        <LinkedInIcon fontSize={iconSize} />
        <h3 className="home-socials-item-text">LinkedIn</h3>
      </div>
      <div className="home-socials-item">
        <GitHubIcon fontSize={iconSize} />
        <h3 className="home-socials-item-text">GitHub</h3>
      </div>
      <div className="home-socials-item">
        <EmailRoundedIcon fontSize={iconSize} />
        <h3 className="home-socials-item-text">Email</h3>
      </div>
    </div>
  );
}

export default HomeSocials;
