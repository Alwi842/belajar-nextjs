export default function Button({type, buttonClassName, children, onClick=()=> {} }) {
  return (
    <button type={type} onClick={onClick}
      className={`h-10 px-6 font-semibold rounded text-white ${buttonClassName}`}
    >
      {children}
    </button>
  );
}
