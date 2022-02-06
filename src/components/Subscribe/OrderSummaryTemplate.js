import { useContext } from "react";
import { summaryContext } from "../../pages/SubscribePage";

export default function OrderSummarywithButton({ classPrefix }) {
  const summary = useContext(summaryContext);

  return (
    <div className={`${classPrefix}orderSummary--Container`}>
      <div className={`${classPrefix}orderSummary`}>
        <p className={`${classPrefix}orderSummary--title`}>ORDER SUMMARY</p>
        <h4 className={`${classPrefix}orderSummary--para`}>
          <span> "I drink my coffee </span>
          {summary.how === "Capsules" && <span> using </span>}
          {(summary.how === "Filter" || summary.how === "Espresso") && (
            <span> as </span>
          )}
          <span className="summaryObject">{summary.how}</span>
          <span> , with a </span>
          <span className="summaryObject">{summary.type}</span>
          <span> type of bean. </span>
          <span className="summaryObject">{summary.amount} </span>
          {(summary.grind === "Cafetiére" || summary.grind === "Filter") && (
            <span> ground ala </span>
          )}
          <span className="summaryObject">{summary.grind}</span>
          <span> , sent to me </span>
          <span className="summaryObject">{summary.frequency}</span>
          <span> . "</span>
        </h4>
      </div>
    </div>
  );
}
