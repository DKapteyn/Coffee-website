import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="TopNav--container">
      <img src="/mainAssets/assets/shared/desktop/logo.svg" alt="Log" />
      <div className="Nav--links">
        <Link to="Home">Home</Link>
        <Link to="About">About Us</Link>
        <Link to="Subscribe">Create Your Plan</Link>
      </div>
      <img
        className="TopNav--hamburger"
        src="\mainAssets\assets\shared\mobile\icon-hamburger.svg"
        alt="hamburger icon"
      />
    </div>
  );
}
