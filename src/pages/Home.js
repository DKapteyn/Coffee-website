import { useNavigate } from "react-router-dom";
import HeroPicHome from "../components/Home/HeroPicHome";
import OurCollection from "../components/Home/OurCollection";
import WhyUs from "../components/Home/WhyUs";
import HowItWorks from "../components/Home/HowItWorks";

export default function Home() {
  const navigate = useNavigate();

  function navSubscribe() {
    navigate("/Subscribe");
  }

  return (
    <div>
      <HeroPicHome navSubscribe={navSubscribe} />
      <OurCollection />
      <WhyUs />
      <HowItWorks navSubscribe={navSubscribe} />
    </div>
  );
}
