import { useEffect, useState, useRef } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div>
      Timer - {timer}
      <br />{" "}
      <button onClick={() => clearInterval(interval.current)}>clear</button>
    </div>
  );
}

export default Timer;
