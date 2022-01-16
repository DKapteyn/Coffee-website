import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroPicHome() {
  const navigate = useNavigate();

  function navSubscribe() {
    navigate("/Subscribe");
  }

  return (
    <div className="home--heroPicContainer">
      <img
        className="home--heroPic"
        src="/mainAssets/assets/home/desktop/image-hero-coffeepress.jpg"
        alt="home coffee pic"
      />

      <div className="home--heroPicText">
        <h1 className="home--heroPicTitle">Great coffee made simple.</h1>
        <p className="home--heroPicPara">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button onClick={navSubscribe} className="home--heroPicButton">
          Create your plan
        </button>
      </div>
    </div>
  );
}
