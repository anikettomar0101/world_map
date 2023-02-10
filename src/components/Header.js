import "./Header.css";

const Header = ({
  iconImageUrl,
  profileImageUrl,
  optionImageUrl,
  logoImageUrl,
}) => {
  return (
    <div className="navigation-bar">
      <div className="background1" />
      <div className="search">
        <div className="input" />
        <img className="icon3" alt="" src={iconImageUrl} />
      </div>
      <div className="tab" />
      <div className="menu">
        <div className="label">Statistics</div>
        <div className="label1">Overview</div>
        <div className="label">Dashboard</div>
        <div className="label">Analytics</div>
      </div>
      <img className="profile-icon" alt="" src={profileImageUrl} />
      <img className="option-icon" alt="" src={optionImageUrl} />
      <div className="logo">
        <img className="logo-icon" alt="" src={logoImageUrl} />
        <div className="orion">ORION</div>
      </div>
    </div>
  );
};

export default Header;
