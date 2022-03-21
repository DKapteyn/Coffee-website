import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { widthContext } from "../../App";

export default function TopNav() {
  const width = useContext(widthContext);
  //global variables in App.js

  const mobile = window.$mobileWidth;

  const [dropDown, setDropDown] = useState(false);

  //If width gets larger than mobile dropDown State changes to false
  useEffect(() => {
    if (width > mobile) {
      setDropDown(false);
    }
  }, [width, mobile]);

  return (
    <div className="TopNav--container">
      <img
        className="TopNav--logo"
        src="assets/shared/desktop/logo.svg"
        alt="Logo"
      />

      {/* conditionally rendered if screen is larger than mobile or 
     the state of dropdown is true(changed by clicking the hamburger menu) */}

      {dropDown === true && width <= mobile && (
        <img
          onClick={() => setDropDown(!dropDown)}
          className="TopNav--hamburger"
          src="\mainAssets\assets\shared\mobile\icon-close.svg"
          alt="X icon"
        />
      )}

      {dropDown === false && (
        <img
          onClick={() => setDropDown(!dropDown)}
          className="TopNav--hamburger"
          src="\mainAssets\assets\shared\mobile\icon-hamburger.svg"
          alt="hamburger icon"
        />
      )}

      {(width > mobile || dropDown === true) && (
        <div
          className="TopNav-dropDownOverFlow"
          onClick={() => setDropDown(false)}
        >
          <nav className="Nav--linksTop">
            <Link to="Home">Home</Link>
            <Link to="About">About Us</Link>
            <Link to="Subscribe">Create Your Plan</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
