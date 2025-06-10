import useCompter from "./UseCompter";

function Counter() {
  const [count, Increment, Decrement, Reset] = useCompter(15);
  return (
    <div>
      <p>counter : {count}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter;
