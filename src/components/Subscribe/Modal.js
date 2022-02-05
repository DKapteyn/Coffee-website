import OrderSummaryTemplate from "./OrderSummaryTemplate";

export default function Modal({ openModal, toggle }) {
  if (!openModal) return null;
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
        <div className="Modal--totalAndButtonContainer">
          <div className="Modal--monthTotal">$14.00/mo</div>
          <button className="Button">Checkout</button>
        </div>
      </div>
    </div>
  );
}
