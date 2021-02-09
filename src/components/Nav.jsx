import React from "react";
import NavLogo from "./NavLogo";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <NavLogo />
      </div>
      <div className="nav-right">
        <a href="#Events">Events</a>
        <a href="#News">News & Insights</a>
        <a href="#Resources">Resources</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact Us</a>
        <a className="fa fa-search"></a>
      </div>
    </div>
  );
};

export default Nav;
