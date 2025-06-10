import React from "react";
function Button(props) {
  console.log(`rendering ${props.children}`);
  return <button onClick={() => props.Increment()}>{props.children}</button>;
}

export default React.memo(Button);
