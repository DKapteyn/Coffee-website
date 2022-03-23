import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "./modifiedLogo.svg";

export default function BottomNav() {
  return (
    <div className="BottomNav--container">
      <Icon fill="white" />

      {/* SVG ADDED AS REACT COMPONENT SO NOT TO POLLUTE THE FILE. FILE WAS ALSO COPIED TO SRC SO THAT IT COULD BE IMPORTED AS A REACT FUNCTION  */}
      <div className="Nav--linksBottom">
        <Link to="/Coffee-website/Home">Home</Link>
        <Link to="/Coffee-website/About">About Us</Link>
        <Link to="/Coffee-website/Subscribe">Create Your Plan</Link>
      </div>

      <div className="BottomNav--socialMedia">
        <img
          src="assets/shared/desktop/icon-facebook.svg"
          alt="Facebook Icon"
        />
        <img src="assets/shared/desktop/icon-twitter.svg" alt="Twitter Icon" />
        <img
          src="assets/shared/desktop/icon-instagram.svg"
          alt="Instagram Icon"
        />
      </div>
    </div>
  );
}
