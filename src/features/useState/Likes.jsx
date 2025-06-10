import { useState } from "react";

function Likes() {
  const style = {
    color: "blue",
  };

  const Increment = () => {
    setLikes((prev) => prev + 1);
  };
  const Increment_ = () => {
    setLikes((prev) => prev - 1);
  };
  const [likes, setLikes] = useState(Math.floor(Math.random() * 10000));
  return (
    <div>
      <p>
        Nombre de likes <span style={style}>{likes}</span>
      </p>
      <button onClick={Increment}>Likez !!</button>
      <button onClick={Increment_} style={{ marginLeft: "5px" }}>
        annuler
      </button>
    </div>
  );
}

export default Likes;
