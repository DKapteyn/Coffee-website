import CreatePlan from "../components/Subscribe/CreatePlan";
import HowDoYouDrink from "../components/Subscribe/HowDoYouDrink";
import PlanHowItWorks from "../components/Subscribe/PlanHowItWorks";
import PlanList from "../components/Subscribe/PlanList";

export default function SubscribePage() {
  return (
    <div>
      <CreatePlan />
      <PlanHowItWorks />
      <div className="PlanandHowDo--Container">
        <PlanList />
        <HowDoYouDrink />
      </div>
    </div>
  );
}
