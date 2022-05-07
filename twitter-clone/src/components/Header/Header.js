import React from "react";
import headerLogo from "../../images/headerLogo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <img src={headerLogo} alt="Meower Logo" className="header__logo" />
        <span className="header__logo-text">Meower</span>
      </div>
      <div className="header__profile-wrapper">
        <span className="header__profile-name">Urfin Jus</span>
        <div className="header__profile-icon">UJ</div>
      </div>
    </header>
  );
}
