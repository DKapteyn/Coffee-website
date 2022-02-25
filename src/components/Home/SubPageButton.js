import { useNavigate } from "react-router-dom";

export default function SubPageButton({ secondClass }) {
  const navigate = useNavigate();

  function navSubscribe() {
    navigate("/Subscribe");
  }
  return (
    <button onClick={navSubscribe} className={`Button ${secondClass}`}>
      Create your plan
    </button>
  );
}
