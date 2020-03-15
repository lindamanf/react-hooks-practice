import React from "react";

function Count() {
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef();
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>STOP</button>
    </div>
  );
}

export default Count;
