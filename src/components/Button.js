import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();

  function navSubscribe() {
    navigate("/Subscribe");
  }
  return (
    <div>
      <button onClick={navSubscribe} className="createPlanButton">
        Create your plan
      </button>
    </div>
  );
}
