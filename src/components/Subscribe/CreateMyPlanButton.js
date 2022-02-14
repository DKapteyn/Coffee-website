import { useContext } from "react";
import { summaryContext } from "../../pages/SubscribePage";

export default function CreateMyPlanButton({ toggle }) {
  const { summary } = useContext(summaryContext);
  const sumRegex = /_+/;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "55px",
        marginBottom: "168px",
      }}
    >
      {/* will display if all options have been picked */}
      {sumRegex.test(summary.how) === false &&
        sumRegex.test(summary.type) === false &&
        sumRegex.test(summary.amount) === false &&
        summary.grind !== undefined &&
        sumRegex.test(summary.frequency) === false && (
          <button onClick={toggle} className="Button">
            Create my plan!
          </button>
        )}
      {/* will display if any options has not been picked */}
      {(sumRegex.test(summary.how) ||
        sumRegex.test(summary.type) ||
        sumRegex.test(summary.amount) ||
        summary.grind === undefined ||
        sumRegex.test(summary.frequency)) && (
        <button className="blankButton">Create my plan!</button>
      )}
    </div>
  );
}
