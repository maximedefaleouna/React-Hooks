import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    case "0":
      return 0;
    default:
      return state;
  }
};
function Compteur2() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <div>compteur - {count}</div>
      <button onClick={() => dispatch("+")}>Increment</button>
      <button onClick={() => dispatch("-")}>Decrement</button>
      <button onClick={() => dispatch("0")}>Reset</button>
    </div>
  );
}

export default Compteur2;
