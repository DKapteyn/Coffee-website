import { widthContext } from "../../App";
import { useContext } from "react";

export default function AboutUs() {
  const width = useContext(widthContext);
  //global variables in App.js
  const tablet = window.$tabletWidth;
  const mobile = window.$mobileWidth;

  return (
    <div className="AboutUs--Container">
      {/* Image changes based on screen size   */}
      {width > tablet ? (
        //image for desktop
        <img
          src="/mainAssets/assets/about/desktop/image-hero-whitecup.jpg"
          alt="Coffee Cup Pic"
          className="AboutUs--heroPic"
        />
      ) : //image for tablet
      width > mobile ? (
        <img
          src="/mainAssets/assets/about/tablet/image-hero-whitecup.jpg"
          alt="Coffee Cup Pic"
          className="AboutUs--heroPic"
        />
      ) : (
        //image for mobile
        <img
          src="/mainAssets/assets/about/mobile/image-hero-whitecup.jpg"
          alt="Coffee Cup Pic"
          className="AboutUs--heroPic"
        />
      )}
      <div className="AboutUs--heroPicText">
        <div className="AboutUs--title">About Us</div>
        <div className="AboutUs--para">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </div>
      </div>
    </div>
  );
}
