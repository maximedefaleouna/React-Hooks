import ComposantC from "./composantC";

function ComposantB() {
  return (
    <div>
      <p>composant B</p>
      <ComposantC />
    </div>
  );
}

export default ComposantB;
