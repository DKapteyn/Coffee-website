import { useContext } from "react";
import { summaryContext } from "../../pages/SubscribePage";

export default function CreateMyPlanButton({ toggle }) {
  const { summary } = useContext(summaryContext);

  //will match if text contains one or more underscores
  const underlineRegex = /_+/;

  return (
    <div className="myPlanButton">
      {/* will display if all options have been picked */}
      {underlineRegex.test(summary.how) === false &&
        underlineRegex.test(summary.type) === false &&
        underlineRegex.test(summary.amount) === false &&
        (summary.grind !== undefined || summary.grindNeed === false) &&
        underlineRegex.test(summary.frequency) === false && (
          <button onClick={toggle} className="Button ">
            Create my plan!
          </button>
        )}

      {/* will display if any options has not been picked */}
      {(underlineRegex.test(summary.how) ||
        underlineRegex.test(summary.type) ||
        underlineRegex.test(summary.amount) ||
        (summary.grind === undefined && summary.grindNeed === true) ||
        underlineRegex.test(summary.frequency)) && (
        <button className="blankButton ">Create my plan!</button>
      )}
    </div>
  );
}
