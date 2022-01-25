export default function PlanList() {
  return (
    <ul className="planList">
      <li className="planList--item">
        <div className="listNum listNum1">01</div>
        <h4 className="listTitle">Preferences</h4>
      </li>
      <li className="planList--item">
        <div className="listNum">02</div>
        <h4 className="listTitle"> Bean type</h4>
      </li>
      <li className="planList--item">
        <div className="listNum">03</div>
        <h4 className="listTitle">Quantity</h4>
      </li>
      <li className="planList--item">
        <div className="listNum">04</div>
        <h4 className="listTitle">Grind Option</h4>
      </li>
      <li className="planList--item">
        <div className="listNum">05</div>
        <h4 className="listTitle"> Deliveries</h4>
      </li>
    </ul>
  );
}
