export default function CreateMyPlanButton({ toggle }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "55px",
        marginBottom: "168px",
      }}
    >
      <button onClick={toggle} className="Button">
        Create my plan!
      </button>
    </div>
  );
}
