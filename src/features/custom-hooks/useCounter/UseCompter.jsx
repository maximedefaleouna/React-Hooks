import { useState } from "react";

function useCompter(initial = 0) {
  const [count, setCount] = useState(initial);

  const Increment = () => {
    setCount((prev) => prev + 1);
  };
  const Decrement = () => {
    setCount((prev) => prev - 1);
  };
  const Reset = () => {
    setCount(initial);
  };
  return [count, Increment, Decrement, Reset];
}

export default useCompter;
