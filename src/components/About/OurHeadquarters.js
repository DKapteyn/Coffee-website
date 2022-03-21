export default function OurHeadquarters() {
  return (
    <div className="OurHeadquarters--Container">
      <div className="OurHeadquarters--mainTitle">Our headquarters</div>
      <div className="OurHeadquarters--LocationContainer">
        <div className="OurHeadquarters--Location">
          <img
            className="UKPic"
            src="assets/about/desktop/illustration-uk.svg"
            alt="United Kingdom"
          />
          <div className="OurHeadquarters--title">United Kingdom</div>
          <ul className="address">
            <li>68 Asfordby Rd</li>
            <li> Alcaston</li>
            <li>SY6 1YA</li>
            <li>+44 1241 918425</li>
          </ul>
        </div>
        <div className="OurHeadquarters--Location">
          <img
            className="canadaPic"
            src="assets/about/desktop/illustration-canada.svg"
            alt="Canada"
          />
          <div className="OurHeadquarters--title">Canada</div>
          <ul className="address">
            <li>1528 Eglinton Avenue</li>
            <li> Toronto</li>
            <li>Ontario M4P 1A6</li>
            <li>+1 416 485 2997</li>
          </ul>
        </div>
        <div className="OurHeadquarters--Location">
          <img
            className="australiaPic"
            src="assets/about/desktop/illustration-australia.svg"
            alt="Australia"
          />
          <div className="OurHeadquarters--title">Australia</div>
          <ul className="address">
            <li>36 Swanston Street</li>
            <li> Kewell</li>
            <li>Victoria</li>
            <li> +61 4 9928 3629</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
