import React from "react";
import SignUpImage from "../assets/Image_21.png";

const SignUpBanner = () => {
  return (
    <div className="banner">
      <img src={SignUpImage} alt="members card" />
      <div className="banner-text">
        <p>Sign-up to the newsletter to get the latest news in your inbox</p>
        <button>NEWSLETTER SIGN UP</button>
      </div>
    </div>
  );
};

export default SignUpBanner;
