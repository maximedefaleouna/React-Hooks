import ComposantB from "./composantB";
function ComposantA() {
  return (
    <div>
      <p>composant A</p>
      <ComposantB />
    </div>
  );
}

export default ComposantA;
