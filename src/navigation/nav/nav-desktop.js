import React from "react";
import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import "./navDesktop.css";

const NavDesktop = () => {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <div className="empty 2xl:w-[30%] 2xl:left-[20rem] xl:w-[30%] xl:left-[16rem]"></div>
      <div className="desktopMenu">
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
    </>
  );
};

export default NavDesktop;
