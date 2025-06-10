import React from "react";
import { useEffect, useRef } from "react";

function Focus() {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus input element
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const FOCUS = () => {
    inputRef2.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <br />
      <br />
    </div>
  );
}

export default Focus;
