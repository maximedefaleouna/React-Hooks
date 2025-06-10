import { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function UseCallback() {
  const [age, setAge] = useState(35);
  const [salary, setSalary] = useState(8000);
  //   function IncrementAge() {
  //     setAge((prev) => prev + 1);
  //   }
  //   function IncrementSalary() {
  //     setSalary((prev) => prev + 1000);
  //   }
  // a chaque fois que le composant est rendu , une nouvelle reference est creer pour toutes les fonction
  // donc quand une fonction est passé comme porps elle cause le rerendu du composant enfant(raison pour laquelle memo n'empeche pas)
  // pour eviter ca on utilise le hook useCallback il fonction en utilisant le cache de la fonction en watchant les dependances

  const IncrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);
  const IncrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);
  return (
    <div style={{ border: "1px solid black" }}>
      <Title />
      <Count text="Age" count={age} />
      <Button Increment={IncrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button Increment={IncrementSalary}>Increment salary</Button>
      <br />
      <br />
    </div>
  );
}

export default UseCallback;
