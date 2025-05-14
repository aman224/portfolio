import logo from "../assets/profile.jpg";

function Header() {
  return (
    <div className="header pt-6">
      <div className="heading hidden sm:block">Portfolio</div>
      <div className="profile w-100 sm:w-auto justify-between">
        <div className="profile-name text-left sm:text-right">
          <div>Aman</div>
          <div className="text-lg">Ottakandathil</div>
        </div>
        <img
          className="profile-pic object-contain h-12 w-12s"
          src={logo}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Header;
