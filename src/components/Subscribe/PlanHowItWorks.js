export default function PlanHowItWorks() {
  return (
    <div className="PlanHIW--container">
      <div className="PlanHIWCircles">
        <div className="PlanHIWCircle"></div>
        <div className="PlanHIWLine"></div>
        <div className="PlanHIWCircle"></div>
        <div className="PlanHIWCircle"></div>
      </div>

      <div className="PlanHIWSectionContainer">
        <div className="PlanHIWSection">
          <h1 className="PlanHIWNumber">01</h1>
          <h3 className="PlanHIWSectionTitle">Pick your coffee</h3>
          <p className="PlanHIWPara">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="PlanHIWSection">
          <h1 className="PlanHIWNumber">02</h1>
          <h3 className="PlanHIWSectionTitle">Choose the frequency</h3>
          <p className="PlanHIWPara">
            Choose the frequency Customize your order frequency, quantity, even
            your roast style and grind type. Pause, skip or cancel your
            subscription with no commitment through our online portal.
          </p>
        </div>
        <div className="PlanHIWSection">
          <h1 className="PlanHIWNumber">03</h1>
          <h3 className="PlanHIWSectionTitle">Receive and enjoy!</h3>
          <p className="PlanHIWPara">
            Receive and enjoy! We ship your package within 48 hours, freshly
            roasted. Sit back and enjoy award-winning world-class coffees
            curated to provide a distinct tasting experience.
          </p>
        </div>
      </div>
    </div>
  );
}
