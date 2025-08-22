export default function Button({ label, onClick, type }) {
  return (
    <button
      className={`btn btn-${type}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}