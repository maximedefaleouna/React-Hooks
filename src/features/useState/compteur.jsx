import { useState } from "react";

function Compteur() {
  let [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={Increment}>count {count}</button>
    </div>
  );
}

export default Compteur;
