import { useContext } from "react";
import { summaryContext } from "../../pages/SubscribePage";

export default function OrderSummarywithButton() {
  const summary = useContext(summaryContext);

  return (
    <div>
      <div className="orderSummary">
        <p className="orderSummary--title">ORDER SUMMARY</p>
        <h4 className="orderSummary--para">
          {`"I drink my coffee using ${summary.how}, with a ${summary.type} type of bean. ${summary.amount}, sent to me ${summary.frequency}."`}
        </h4>
      </div>
    </div>
  );
}
