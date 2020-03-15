import React, { useContext } from "react";
import { CountContext } from "../App_reducer_axios";

function ComponentC() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h2>コンポーネントC</h2>
      <div>
        <button
          onClick={() =>
            countContext.countDispatch({ type: "increment1", value: 1 })
          }
        >
          Increment +
        </button>
        <button
          onClick={() =>
            countContext.countDispatch({ type: "decrement1", value: 1 })
          }
        >
          Increment -
        </button>
        <button onClick={() => countContext.countDispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ComponentC;
