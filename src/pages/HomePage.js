import Button from "../components/Home/SubPageButton";
import HeroPicHome from "../components/Home/HeroPicHome";
import OurCollection from "../components/Home/OurCollection";
import WhyUs from "../components/Home/WhyUs";
import HowItWorksTemplate from "../components/Shared/HowItWorksTemplate";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  function useScrollToTop() {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [location]);
  }

  useScrollToTop();

  return (
    <div className="Home">
      <HeroPicHome />
      <OurCollection />
      <WhyUs />
      <div className="HIWButton--Container">
        <HowItWorksTemplate classPrefix={"HIW"} />
        <Button style={{ marginBottom: "200px" }} />
      </div>
    </div>
  );
}
