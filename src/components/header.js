import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <img src={hamburger} className={styles.hamburger} alt="hamburger" />
      <div className={styles.empty}></div>
      <div className={styles.pages}>
        <NavLink to="/">
          <span className={styles.nav_num}>00</span> home
        </NavLink>
        <NavLink to="/destination">
          <span className={styles.nav_num}>01</span> destination
        </NavLink>
        <NavLink to="/crew">
          <span className={styles.nav_num}>02</span> crew
        </NavLink>
        <NavLink to="/technology">
          <span className={styles.nav_num}>03</span> technology
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
