import React from "react";
import CalendarImage from "../assets/Mask_Group_9.png";

const RegisterBanner = () => {
  return (
    <div className="banner">
      <img src={CalendarImage} alt="members card" />
      <div className="banner-text">
        <p>Register for updates to receive information about upcoming events</p>
        <button>REGISTER FOR UPDATES</button>
      </div>
    </div>
  );
};

export default RegisterBanner;
