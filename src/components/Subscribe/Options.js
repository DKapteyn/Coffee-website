import { useState, useContext, useEffect } from "react";
import { highlightContext, summaryContext } from "../../pages/SubscribePage";

export default function Options(props) {
  const [dropDown, setDropDown] = useState(false);

  const { setHighlight } = useContext(highlightContext);
  const { summary } = useContext(summaryContext);

  // changes the highlighted option in the Planlist component
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
        summary.grind !== undefined
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

  //Changes class to update the color of the option
  const [clickedColor, setClickedColor] = useState({
    option1: "",
    option2: "",
    option3: "",
  });

  //changes color for option one and changes the Ordersummary through props
  function createClickedColorOption1() {
    props.clickOption1();

    setClickedColor({ option1: "clicked", option2: "", option3: "" });
  }

  function createClickedColorOption2() {
    props.clickOption2();

    setClickedColor({ option1: "", option2: "clicked", option3: "" });
  }

  function createClickedColorOption3() {
    props.clickOption3();

    setClickedColor({ option1: "", option2: "", option3: "clicked" });
  }

  //CONTROLS OPTIONS DROPDOWN OPENING AND CLOSING AND TURNING ARROW IMAGE.
  function ChangeDropDown() {
    setDropDown((prevState) => (prevState === false ? true : false));
  }

  return (
    <div className="Options--Container">
      <div onClick={ChangeDropDown} className="Options--MainTitleContainer">
        <h2 className="Options--MainTitle">{props.MainTitle}</h2>
        <img
          //CAUSES ARROW TO FLIP WHEN DROPDOWN IS OPEN
          style={
            dropDown === true
              ? { transform: "scaleY(-1)" }
              : { transform: "scaleY(1)" }
          }
          src="/mainAssets/assets/plan/desktop/icon-arrow.svg"
          alt="arrow"
        />
      </div>

      {dropDown === true && (
        <div className="Options--DropDownList">
          <div
            className={`Options--${clickedColor.option1}Item Options--DropDownItem`}
            onClick={createClickedColorOption1}
          >
            <h3 className="Options--SubTitle">{props.option1Title}</h3>
            <p className="Options--Para">{props.option1Para}</p>
          </div>
          <div
            className={`Options--${clickedColor.option2}Item Options--DropDownItem`}
            onClick={createClickedColorOption2}
          >
            <h3 className="Options--SubTitle">{props.option2Title}</h3>
            <p className="Options--Para">{props.option2Para}</p>
          </div>
          <div
            className={`Options--${clickedColor.option3}Item Options--DropDownItem`}
            onClick={createClickedColorOption3}
          >
            <h3 className="Options--SubTitle">{props.option3Title}</h3>
            <p className="Options--Para">{props.option3Para}</p>
          </div>
        </div>
      )}
    </div>
  );
}
