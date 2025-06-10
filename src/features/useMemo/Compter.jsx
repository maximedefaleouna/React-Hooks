import React, { useMemo } from "react";
import { useState } from "react";

function Compteur() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const paire = useMemo(() => {
    //utilisation de useMemo
    let i = 0;
    while (i < 10) {
      console.log("calcul");
      i++;
    }
    return counterOne % 2 == 0;
  }, [counterOne]);
  return (
    <div>
      <div>
        <button onClick={() => IncrementOne()}>count one - {counterOne}</button>
        <br />
        <span>{paire ? "Paire" : "impaire"}</span>
      </div>
      <br />
      <div>
        <button onClick={() => IncrementTwo()}>count Two - {counterTwo}</button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Compteur;
