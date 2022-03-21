import Button from "./SubPageButton";
import { widthContext } from "../../App";
import { useContext } from "react";

export default function HeroPicHome() {
  const width = useContext(widthContext);
  //global variables in App.js
  const tablet = window.$tabletWidth;
  const mobile = window.$mobileWidth;
  return (
    <div className="home--heroPicContainer">
      {parseInt(width) > tablet ? (
        <img
          className="home--heroPic"
          src="assets/mainpage/desktop/image-hero-coffeepress.jpg"
          alt="home coffee pic"
        />
      ) : parseInt(width) > mobile ? (
        <img
          className="home--heroPic"
          src="assets/mainpage/tablet/image-hero-coffeepress.jpg"
          alt="home coffee pic"
        />
      ) : (
        <img
          className="home--heroPic"
          src="assets/mainpage/mobile/image-hero-coffeepress.jpg"
          alt="home coffee pic"
        />
      )}

      <div className="home--heroPicText">
        <h1 className="home--heroPicTitle">Great coffee made simple.</h1>
        <p className="home--heroPicPara">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button />
      </div>
    </div>
  );
}
