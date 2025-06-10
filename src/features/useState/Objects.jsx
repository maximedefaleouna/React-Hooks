import { useState } from "react";

function ObjectState() {
  const [person, setPerson] = useState({ nom: "", prenom: "" });
  return (
    <div style={{ marginTop: "5px" }}>
      <h3>useState with Objects</h3>
      <input
        type="text"
        value={person.nom}
        onChange={(e) => setPerson({ ...person, nom: e.target.value })}
      />{" "}
      {/* si on ne spred pas l'operateur ...person le setSate va rendre l'objet
      avec une seull propriété */}
      <input
        type="text"
        value={person.prenom}
        onChange={(e) => setPerson({ ...person, prenom: e.target.value })}
      />
      <p>Nom : {person.nom}</p>
      <p>prenom : {person.prenom}</p>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
}

export default ObjectState;
