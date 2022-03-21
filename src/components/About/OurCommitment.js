import { widthContext } from "../../App.js";
import { useContext } from "react";

export default function OurCommitment() {
  const width = useContext(widthContext);
  //width constants are in the App.js
  const mobile = window.$mobileWidth;
  const tablet = window.$tabletWidth;

  return (
    <div className="OurCommitment--Container">
      {
        //Destop Image
        width > tablet ? (
          <img
            className="OurCommitment--image"
            src="assets/about/desktop/image-commitment.jpg"
            alt="Barista"
          />
        ) : //Tablet Image
        width > mobile ? (
          <img
            className="OurCommitment--image"
            src="assets/about/tablet/image-commitment.jpg"
            alt="Barista"
          />
        ) : (
          //Mobile Image
          <img
            className="OurCommitment--image"
            src="assets/about/mobile/image-commitment.jpg"
            alt="Barista"
          />
        )
      }
      <div className="OurCommitment--text">
        <div className="OurCommitment--title">Our commitment</div>
        <div className="OurCommitment--para">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </div>
      </div>
    </div>
  );
}
