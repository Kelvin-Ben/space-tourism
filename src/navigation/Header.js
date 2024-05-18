import React from "react";
import NavDesktop from "./nav/nav-desktop";
import "./Header.css";
import NavMobile from "./nav/nav-mobile";

const Header = () => {
  return (
    <div className="header">
      <NavDesktop />
      <NavMobile />
    </div>
  );
};

export default Header;
