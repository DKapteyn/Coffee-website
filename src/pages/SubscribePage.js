import { useState, createContext } from "react";
import CreatePlan from "../components/Subscribe/CreatePlan";
import HowDoYouDrink from "../components/Subscribe/HowDoYouDrink";

import PlanHowItWorks from "../components/Subscribe/PlanHowItWorks";
import PlanList from "../components/Subscribe/PlanList";

export const summaryContext = createContext("");

export default function SubscribePage() {
  const [summary, setSummary] = useState({
    how: "_________",
    type: "_________",
    amount: "________",
    frequency: "_________",
  });

  return (
    <div>
      <CreatePlan />
      <PlanHowItWorks />
      <summaryContext.Provider value={summary}>
        <div className="PlanandHowDo--Container">
          <PlanList />
          <HowDoYouDrink />
        </div>
      </summaryContext.Provider>
    </div>
  );
}
