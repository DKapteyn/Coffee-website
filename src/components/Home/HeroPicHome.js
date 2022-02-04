import Button from "./SubPageButton";

export default function HeroPicHome() {
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
        <Button />
      </div>
    </div>
  );
}
