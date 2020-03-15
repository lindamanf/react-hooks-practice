import React from "react";

function Check() {
  const [countOne, setCountOne] = React.useState(0);
  const [countTwo, setCountTwo] = React.useState(0);
  const incrementCountOne = React.useCallback(() => {
    setCountOne(countOne + 1);
  }, [countOne]);
  const incrementCountTwo = React.useCallback(() => {
    setCountTwo(countTwo + 1);
  }, [countTwo]);
  const isEven = React.useMemo(() => countOne % 2 === 0, [countOne]);
  return (
    <div>
      <h2>カウント1: {isEven ? "偶数" : "奇数"}</h2>
      <button onClick={incrementCountOne}>{`カウント1 - ${countOne}`}</button>
      <button onClick={incrementCountTwo}>{`カウント2 - ${countTwo}`}</button>
    </div>
  );
}

export default Check;
