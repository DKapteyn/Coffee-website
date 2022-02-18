import { highlightContext, summaryContext } from "../../pages/SubscribePage";
import { useContext, useEffect } from "react";

export default function PlanList() {
  const { highlight, setHighlight } = useContext(highlightContext);
  const { summary } = useContext(summaryContext);

  useEffect(() => {
    function changeHightlight() {
      //default is one highlighted
      const sumRegex = /_+/;
      const blankHighlight = {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
      };

      if (
        sumRegex.test(summary.how) === false &&
        sumRegex.test(summary.type) === false &&
        sumRegex.test(summary.amount) === false &&
        (summary.grind !== undefined || summary.grindNeed === false)
      ) {
        setHighlight({ ...blankHighlight, five: "active" });
      } else if (
        sumRegex.test(summary.how) === false &&
        sumRegex.test(summary.type) === false &&
        sumRegex.test(summary.amount) === false
      ) {
        setHighlight({ ...blankHighlight, four: "active" });
      } else if (
        sumRegex.test(summary.how) === false &&
        sumRegex.test(summary.type) === false
      ) {
        setHighlight({ ...blankHighlight, three: "active" });
      } else if (sumRegex.test(summary.how) === false) {
        setHighlight({ ...blankHighlight, two: "active" });
      }
    }
    changeHightlight();
  }, [summary, setHighlight]);

  return (
    <>
      <ul className="planList">
        <li className={`planList--item${highlight.one}`}>
          <div className="listNum listNum1">01</div>
          <h4 className="listTitle">Preferences</h4>
        </li>
        <li className={`planList--item${highlight.two}`}>
          <div className="listNum">02</div>
          <h4 className="listTitle"> Bean type</h4>
        </li>
        <li className={`planList--item${highlight.three}`}>
          <div className="listNum">03</div>
          <h4 className="listTitle">Quantity</h4>
        </li>
        <li className={`planList--item${highlight.four}`}>
          <div className="listNum">04</div>
          <h4 className="listTitle">Grind Option</h4>
        </li>
        <li className={`planList--item${highlight.five}`}>
          <div className="listNum">05</div>
          <h4 className="listTitle"> Deliveries</h4>
        </li>
      </ul>
    </>
  );
}
