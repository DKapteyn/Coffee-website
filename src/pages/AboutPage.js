import AboutUs from "../components/About/AboutUs";
import OurCommitment from "../components/About/OurCommitment";
import UncompromisingQuality from "../components/About/UncompromisingQuality";
import OurHeadquarters from "../components/About/OurHeadquarters";

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <AboutUs />
      <OurCommitment />
      <UncompromisingQuality />
      <OurHeadquarters />
    </div>
  );
}
