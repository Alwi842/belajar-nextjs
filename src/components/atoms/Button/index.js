export default function Button(props) {
  return (
    <button
      className={`h-14 px-6 font-semibold rounded text-white ${props.buttonClassName}`}
    >
      {props.children}
    </button>
  );
}
