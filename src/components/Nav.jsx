import React from "react";
import hamburger from "../assets/hamburger-icon.png";

const Nav = () => {
  return (
    <div className="nav">
      <img src={hamburger} className="hamburger" />
      <div className="nav-logo">
        <h3>NOMINET</h3>
        <h1>MEMBERHUB</h1>
      </div>
      <div className="nav-right">
        <a href="#Events">Events</a>
        <a href="#News">News & Insights</a>
        <a href="#Resources">Resources</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact Us</a>
      </div>
      <a className="fa fa-search" id="search"></a>
    </div>
  );
};

export default Nav;
