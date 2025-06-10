import Compteur1 from "./Compter1";
import Compteur2 from "./Compter2";

function UseReducer() {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>UseReducer hook</h2>
      <Compteur1 />
      <Compteur2 />
    </div>
  );
}

export default UseReducer;
