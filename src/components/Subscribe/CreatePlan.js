import { widthContext } from "../../App";
import { useContext } from "react";

export default function CreatePlan() {
  const width = useContext(widthContext);
  //global variables in App.js
  const tablet = window.$tabletWidth;
  const mobile = window.$mobileWidth;
  return (
    <div className="CreatePlan--Container">
      {parseInt(width) > tablet ? (
        <img
          className="CreatePlan--heroPic"
          src="/mainAssets/assets/plan/desktop/image-hero-blackcup.jpg"
          alt="Cup of Coffee"
        />
      ) : parseInt(width) > mobile ? (
        <img
          className="CreatePlan--heroPic"
          src="/mainAssets/assets/plan/tablet/image-hero-blackcup.jpg"
          alt="Cup of Coffee"
        />
      ) : (
        <img
          className="CreatePlan--heroPic"
          src="/mainAssets/assets/plan/mobile/image-hero-blackcup.jpg"
          alt="Cup of Coffee"
        />
      )}

      <div className="CreatePlan--text">
        <div className="CreatePlan--title">Create a plan</div>
        <div className="CreatePlan--para">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </div>
      </div>
    </div>
  );
}
