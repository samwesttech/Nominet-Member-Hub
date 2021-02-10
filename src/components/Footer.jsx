import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <h1 className="logo">NOMINET</h1>
        <div className="footer-socials">
          <a className="fa fa-twitter"></a>
          <a className="fa fa-youtube"></a>
          <a className="fa fa-facebook"></a>
          <a className="fa fa-linkedin"></a>
        </div>
      </div>
      <hr className="footer-line"></hr>
      <div className="footer-info">
        <div className="footer-info-left">
          <div className="footer-list">
            <h3>Home</h3>
          </div>
          <div className="footer-list">
            <h3>Events</h3>
          </div>
          <div className="footer-list">
            <h3>News & Insights</h3>
            <p>Newsletter</p>
          </div>
          <div className="footer-list">
            <h3>Resources</h3>
            <p>Videos</p>
            <p>Member Handbook</p>
            <p>Member Code of Conduct</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className="footer-info-right">
          <div className="footer-list">
            <h3>About</h3>
            <p>Meet the Team</p>
            <p>Corporate Governance</p>
            <p>The Board</p>
          </div>
          <div className="footer-list">
            <h3>Contact us</h3>
            <h3>Accessibility</h3>
            <p>Sitemap</p>
            <p>Privacy Notice</p>
            <p>How we use Cookies</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p> Nominet UK 2021. Company number: 03203859</p>
        <p>
          Minerva House, Edmund Halley Road, Oxford Science Park, OX4 4DQ,
          United Kingdom
        </p>
      </div>
    </div>
  );
};

export default Footer;
