import React, { useState } from "react";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import "./navMobile.css";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <img
        src={isOpen ? close : hamburger}
        alt="menu icon"
        className="hamburger-icon"
        onClick={toggleMenu}
      />

      {isOpen && (
        <div className={`mobile-menu menu-open`}>
          <div className="navLink">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "inactiveNavLink"
              }
            >
              <span className="nav_num">00</span> home
            </NavLink>
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "inactiveNavLink"
              }
            >
              <span className="nav_num">01</span> destination
            </NavLink>
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "inactiveNavLink"
              }
            >
              <span className="nav_num">02</span> crew
            </NavLink>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "inactiveNavLink"
              }
            >
              <span className="nav_num">03</span> technology
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default NavMobile;
