import {
  useReducer,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { useLocation } from "react-router-dom";
import CreatePlan from "../components/Subscribe/CreatePlan";
import HowDoYouDrink from "../components/Subscribe/HowDoYouDrink";
import HowItWorksTemplate from "../components/Shared/HowItWorksTemplate";
import PlanList from "../components/Subscribe/PlanList";
import { widthContext } from "../App";

export const summaryContext = createContext("");

export const highlightContext = createContext("");

export default function SubscribePage() {
  const width = useContext(widthContext);
  //global variable in App.js
  const tablet = window.$tabletWidth;

  const initialState = {
    how: "_____",
    type: "_____",
    amount: "_____",
    grindType: undefined,
    frequency: "_____",
    gridNeed: true,
  };

  const [summary, dispatch] = useReducer(reducer, initialState);

  function useScrollToTop() {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [location]);
  }

  useScrollToTop();

  const [highlight, setHighlight] = useState({
    one: "active",
    two: "",
    three: "",
    four: "",
    five: "",
  });

  function reducer(state, action) {
    switch (action.type) {
      //state for "how do you drink your coffee"
      case "Capsule":
        return {
          ...state,
          how: "Capsules",
          grindNeed: false,
        };
      case "typeFilter":
        return {
          ...state,
          how: "Filter",
          grindNeed: true,
        };
      case "Espresso":
        return {
          ...state,
          how: "Espresso",
          grindNeed: true,
        };
      //state for "what type of coffee"
      case "Single Origin":
        return {
          ...state,
          type: "Single Origin",
        };
      case "Decaf":
        return {
          ...state,
          type: "Decaf",
        };
      case "Blended":
        return {
          ...state,
          type: "Blended",
        };
      //state for  "How mush would you like"
      case "250g":
        return {
          ...state,
          amount: "250g",
        };
      case "500g":
        return {
          ...state,
          amount: "500g",
        };
      case "1000g":
        return {
          ...state,
          amount: "1000g",
        };
      //state for "Want us to grind them"
      case "Wholebean":
        return {
          ...state,
          grind: null,
        };
      case "grindFilter":
        return {
          ...state,
          grind: "Filter",
        };
      case "Cafetiére":
        return {
          ...state,
          grind: "Cafetiére",
        };
      //state for "How ofter should we deliver"
      case "Every week":
        return {
          ...state,
          frequency: "Every week",
        };
      case "Every 2 weeks":
        return {
          ...state,
          frequency: "Every 2 weeks",
        };
      case "Every Month":
        return {
          ...state,
          frequency: "Every Month",
        };

      default:
        return { ...state };
    }
  }

  return (
    <div>
      <CreatePlan />
      <HowItWorksTemplate classPrefix={"PlanHIW"} />
      <summaryContext.Provider value={{ summary, dispatch }}>
        <highlightContext.Provider value={{ highlight, setHighlight }}>
          <div className="PlanandHowDo--Container">
            {/*PlanList component only visible for desktop View*/}
            {width > tablet && <PlanList />}
            <HowDoYouDrink />
          </div>
        </highlightContext.Provider>
      </summaryContext.Provider>
    </div>
  );
}
