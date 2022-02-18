import AboutUs from "../components/About/AboutUs";
import OurCommitment from "../components/About/OurCommitment";
import UncompromisingQuality from "../components/About/UncompromisingQuality";
import OurHeadquarters from "../components/About/OurHeadquarters";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AboutPage() {
  function useScrollToTop() {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [location]);
  }

  useScrollToTop();

  return (
    <div className="AboutPage">
      <AboutUs />
      <OurCommitment />
      <UncompromisingQuality />
      <OurHeadquarters />
    </div>
  );
}
