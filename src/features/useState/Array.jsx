import { useState } from "react";

function ArrayUseState() {
  const [items, setItems] = useState(["item1", "item2"]);
  const [inputvalue, setInputvalue] = useState("");
  const handleItems = (e) => {
    e.preventDefault();
    if (inputvalue.trim() === "") {
      alert("Tu dois entrer un texte valide !");
      return;
    }

    setItems([...items, inputvalue]);
  };
  return (
    <div>
      <h3>useState with Array</h3>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        <form onSubmit={handleItems}>
          <input
            type="text"
            placeholder="add items"
            value={inputvalue}
            onChange={(e) => setInputvalue(e.target.value)}
          />
          <button type="submit">Add+</button>
        </form>
      </ul>
    </div>
  );
}

export default ArrayUseState;
