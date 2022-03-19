import OrderSummaryTemplate from "./OrderSummaryTemplate";
import { summaryContext } from "../../pages/SubscribePage";
import { useContext } from "react";
import { widthContext } from "../../App";

export default function Modal({ openModal, toggle }) {
  const { summary } = useContext(summaryContext);
  const width = useContext(widthContext);
  const mobile = window.$mobileWidth;

  if (!openModal) return null;
  let price = "$0";

  function setPrice() {
    if (summary.amount === "250g") {
      if (summary.frequency === "Every week") {
        return (price = "$28.80");
      } else if (summary.frequency === "Every 2 weeks") {
        return (price = "$19.20");
      } else {
        return (price = "$12.00");
      }
    }
    if (summary.amount === "500g") {
      if (summary.frequency === "Every week") {
        return (price = "$52.00");
      } else if (summary.frequency === "Every 2 weeks") {
        return (price = "$35.00");
      } else {
        return (price = "$22.00");
      }
    }
    if (summary.amount === "1000g") {
      if (summary.frequency === "Every week") {
        return (price = "$88.00");
      } else if (summary.frequency === "Every 2 weeks") {
        return (price = "$64.00");
      } else {
        return (price = "$42.00");
      }
    }
  }

  setPrice();

  return (
    <div onClick={toggle} className="Modal--Overlay">
      <div className="Modal--Container">
        <div className="Modal--titleContainer">
          <div className="Modal--title">Order Summary</div>
        </div>
        <OrderSummaryTemplate classPrefix={"Modal"} />
        <p className="Modal--para">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        {parseInt(width) > mobile ? (
          <div className="Modal--totalAndButtonContainer">
            <div className="Modal--monthTotal">{`${price}/mo`}</div>
            <button className="Button">Checkout</button>
          </div>
        ) : (
          <div className="Modal--totalAndButtonContainer">
            <button className="Button modalButton">
              Checkout -{` ${price} / mo`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
