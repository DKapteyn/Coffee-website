import { useNavigate } from "react-router-dom";

export default function SubPageButton({ style }) {
  const navigate = useNavigate();

  function navSubscribe() {
    navigate("/Subscribe");
  }
  return (
    <div style={style}>
      <button onClick={navSubscribe} className="Button">
        Create your plan
      </button>
    </div>
  );
}
