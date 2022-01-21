import HeroPicHome from "../components/Home/HeroPicHome";
import OurCollection from "../components/Home/OurCollection";
import WhyUs from "../components/Home/WhyUs";
import HowItWorks from "../components/Home/HowItWorks";

export default function HomePage() {
  return (
    <div className="Home">
      <HeroPicHome />
      <OurCollection />
      <WhyUs />
      <HowItWorks />
    </div>
  );
}
