export default function WhyUs() {
  return (
    <div className="whyUsContainer">
      <div className="titleContainer">
        <h2 className="whyUsTitle">Why choose us?</h2>
        <p className="whyUsPara">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="threeBenefitsContainer">
        <div className="benefitContainer">
          <img
            src="/mainAssets/assets/home/desktop/icon-coffee-bean.svg"
            alt="bean icon"
          />
          <div className="threeBenefitsText">
            <h4 className="threeBenefitsTitle">Best quality</h4>
            <p className="threeBenefitsPara">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
        <div className="benefitContainer">
          <img
            src="/mainAssets/assets/home/desktop/icon-gift.svg"
            alt="gift icon"
          />
          <div className="threeBenefitsText">
            <h4 className="threeBenefitsTitle">Exclusive benefits</h4>
            <p className="threeBenefitsPara">
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
        </div>
        <div className="benefitContainer">
          <img
            id="truckPic"
            src="/mainAssets/assets/home/desktop/icon-truck.svg"
            alt="bean icon"
          />
          <div className="threeBenefitsText">
            <h4 className="threeBenefitsTitle">Free shipping</h4>
            <p className="threeBenefitsPara">
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
