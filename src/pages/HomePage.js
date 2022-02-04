import Button from "../components/Home/SubPageButton";
import HeroPicHome from "../components/Home/HeroPicHome";
import OurCollection from "../components/Home/OurCollection";
import WhyUs from "../components/Home/WhyUs";
import HowItWorksTemplate from "../components/Shared/HowItWorksTemplate";
export default function HomePage() {
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
