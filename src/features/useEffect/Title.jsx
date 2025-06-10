import { useState, useEffect } from "react";

function Title() {
  const [count, setCount] = useState(0);
  const [nom, setNom] = useState("");
  useEffect(() => {
    document.title = `click ${count} times`;
    console.log("le titre a changé");
  }, [count]);

  // useEffect simplement est appélé a chaque rendu ca dire quand un state change
  // avec les [] elle s'appelle que une seule fois lors du premier rendu
  // et [contenant les dependances ] elle s'appelle que quand une dependance a changé
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        click pour changer le title
      </button>

      <br />
      <br />
      <input
        type="text"
        placeholder="votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
    </div>
  );
}

export default Title;
