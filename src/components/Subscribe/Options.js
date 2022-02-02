import { useState } from "react";

export default function Options(props) {
  const [dropDown, setDropDown] = useState(false);

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
          <div className="Options--DropDownItem" onClick={props.clickOption1}>
            <h3 className="Options--SubTitle">{props.option1Title}</h3>
            <p className="Options--Para">{props.option1Para}</p>
          </div>
          <div className="Options--DropDownItem" onClick={props.clickOption2}>
            <h3 className="Options--SubTitle">{props.option2Title}</h3>
            <p className="Options--Para">{props.option2Para}</p>
          </div>
          <div className="Options--DropDownItem" onClick={props.clickOption3}>
            <h3 className="Options--SubTitle">{props.option3Title}</h3>
            <p className="Options--Para">{props.option3Para}</p>
          </div>
        </div>
      )}
    </div>
  );
}
