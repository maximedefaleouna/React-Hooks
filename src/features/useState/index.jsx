import ArrayUseState from "./Array";
import Compteur from "./compteur";
import Likes from "./Likes";
import ObjectState from "./Objects";

function UseState() {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>useState hook</h2>
      <Compteur />
      <Likes />
      <ObjectState />
      <ArrayUseState />
    </div>
  );
}

export default UseState;
