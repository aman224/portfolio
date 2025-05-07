import logo from "../assets/profile.jpg";

function Header() {
  return (
    <div className="header">
      <div className="heading">Portfolio</div>
      <div className="profile">
        <div className="profile-name">
          <div className="profile-name-primary">Aman</div>
          <div className="profile-name-sub">Ottakandathil</div>
        </div>
        <img className="profile-pic" src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
