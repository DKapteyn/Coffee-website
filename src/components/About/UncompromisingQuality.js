import { widthContext } from "../../App";
import { useContext } from "react";

export default function UncompromisingQuality() {
  const width = useContext(widthContext);
  //global variables in App.js
  const tablet = window.$tabletWidth;
  const mobile = window.$mobileWidth;
  return (
    <div className="UncompromisingQuality--Container">
      <div className="UncompromisingQuality--text">
        <div className="UncompromisingQuality--title">
          Uncompromising quality
        </div>
        <div className="UncompromisingQuality--para">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </div>
      </div>
      {
        //desktop Image
        width > tablet ? (
          <img
            src="assets/about/desktop/image-quality.jpg"
            alt="latte"
            className="UncompromisingQuality--img"
          /> //tablet Image
        ) : width > mobile ? (
          <img
            src="assets/about/tablet/image-quality.jpg"
            alt="latte"
            className="UncompromisingQuality--img"
          /> // mobile Image
        ) : (
          <img
            src="assets/about/mobile/image-quality.jpg"
            alt="latte"
            className="UncompromisingQuality--img"
          />
        )
      }
    </div>
  );
}
