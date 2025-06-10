import React from "react";
function Count(props) {
  console.log(`rendering ${props.text} count`);
  return (
    <p>
      {props.text} - {props.count}$
    </p>
  );
}

export default React.memo(Count);
