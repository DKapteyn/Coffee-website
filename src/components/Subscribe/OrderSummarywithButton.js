import { useContext } from "react";
import { summaryContext } from "../../pages/SubscribePage";

export default function OrderSummarywithButton() {
  const summary = useContext(summaryContext);

  return (
    <div className="orderSummary--Container">
      <div className="orderSummary">
        <p className="orderSummary--title">ORDER SUMMARY</p>
        <h4 className="orderSummary--para">
          <span> "I drink my coffee using </span>
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
