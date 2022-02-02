import { useReducer, createContext } from "react";
import CreatePlan from "../components/Subscribe/CreatePlan";
import HowDoYouDrink from "../components/Subscribe/HowDoYouDrink";

import PlanHowItWorks from "../components/Subscribe/PlanHowItWorks";
import PlanList from "../components/Subscribe/PlanList";

export const summaryContext = createContext("");
export const dispatchContext = createContext("");

export default function SubscribePage() {
  const initialState = {
    how: "_________",
    type: "_________",
    amount: "________",
    grindType: "",
    frequency: "_________",
  };

  const [summary, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      //state for "how do you drink your coffee"
      case "Capsule":
        return { ...state, how: "Capsule" };
      case "typeFilter":
        return { ...state, how: "Filter" };
      case "Espresso":
        return { ...state, how: "Espresso" };
      //state for "what type of coffee"
      case "single origin":
        return { ...state, type: "Single Origin" };
      case "Decaf":
        return { ...state, type: "Decaf" };
      case "Blended":
        return { ...state, type: "Blended" };
      //state for  "How mush would you like"
      case "250g":
        return { ...state, amount: "250g" };
      case "500g":
        return { ...state, amount: "500g" };
      case "1000g":
        return { ...state, amount: "1000g" };
      //state for "Want us to grind them"
      case "Wholebean":
        return { ...state, grind: "" };
      case "grindFilter":
        return { ...state, grind: "Filter" };
      case "Cafetiére":
        return { ...state, grind: "Cafetiére" };
      //state for "How ofter should we deliver"
      case "Every week":
        return { ...state, frequency: "Every week" };
      case "Every 2 weeks":
        return { ...state, frequency: "Every 2 weeks" };
      case "Every Month":
        return { ...state, frequency: "Every Month" };

      default:
        return { ...state };
    }
  }

  return (
    <div>
      <CreatePlan />
      <PlanHowItWorks />
      <dispatchContext.Provider value={dispatch}>
        <summaryContext.Provider value={summary}>
          <div className="PlanandHowDo--Container">
            <PlanList />
            <HowDoYouDrink />
          </div>
        </summaryContext.Provider>
      </dispatchContext.Provider>
    </div>
  );
}
