import { useState } from "react";

export default function Options(props) {
  const [dropDown, setDropDown] = useState(false);

  function ChangeDropDown() {
    setDropDown((prevState) => (prevState === false ? true : false));
  }

  return (
    <div className="Options--Container">
      <div onClick={ChangeDropDown} className="Options--MainTitleContainer">
        <h2 className="Options--MainTitle">{props.MainTitle}</h2>
        <img src="/mainAssets/assets/plan/desktop/icon-arrow.svg" alt="arrow" />
      </div>

      {dropDown === true && (
        <div className="Options--DropDownList">
          <div className="Options--DropDownItem">
            <h3 className="Options--SubTitle">{props.option1Title}</h3>
            <p className="Options--Para">{props.option1Para}</p>
          </div>
          <div className="Options--DropDownItem">
            <h3 className="Options--SubTitle">{props.option2Title}</h3>
            <p className="Options--Para">{props.option2Para}</p>
          </div>
          <div className="Options--DropDownItem">
            <h3 className="Options--SubTitle">{props.option3Title}</h3>
            <p className="Options--Para">{props.option3Para}</p>
          </div>
        </div>
      )}
    </div>
  );
}
