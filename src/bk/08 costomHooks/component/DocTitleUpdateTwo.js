import React from "react";
import useDocumentTItle from "../hooks/useDocumentTItle";

function DocTitleUpdateTwo() {
  const [count, setCount] = React.useState(0);
  useDocumentTItle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{`COUNT ${count}`}</button>
    </div>
  );
}

export default DocTitleUpdateTwo;
