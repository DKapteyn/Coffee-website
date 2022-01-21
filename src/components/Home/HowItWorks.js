import React from "react";

export default function HowItWorks({ navSubscribe }) {
  return (
    <div className="HIWContainer">
      <h4 className="HIWTitle">How it works</h4>
      <div className="HIWCircles">
        <div className="HIWCircle"></div>
        <div className="HIWLine"></div>
        <div className="HIWCircle"></div>
        <div className="HIWLine"></div>
        <div className="HIWCircle"></div>`
      </div>

      <div className="HIWSectionContainer">
        <div className="HIWSection">
          <h1 className="HIWNumber">01</h1>
          <h3 className="HIWSectionTitle">Pick your coffee</h3>
          <p className="HIWPara">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="HIWSection">
          <h1 className="HIWNumber">02</h1>
          <h3 className="HIWSectionTitle">Choose the frequency</h3>
          <p className="HIWPara">
            Choose the frequency Customize your order frequency, quantity, even
            your roast style and grind type. Pause, skip or cancel your
            subscription with no commitment through our online portal.
          </p>
        </div>
        <div className="HIWSection">
          <h1 className="HIWNumber">03</h1>
          <h3 className="HIWSectionTitle">Receive and enjoy!</h3>
          <p className="HIWPara">
            Receive and enjoy! We ship your package within 48 hours, freshly
            roasted. Sit back and enjoy award-winning world-class coffees
            curated to provide a distinct tasting experience.
          </p>
        </div>
      </div>
      <button onClick={navSubscribe} className="createPlanButton">
        Create your plan
      </button>
    </div>
  );
}
