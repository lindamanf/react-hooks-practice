import React, { useState, useCallback } from "react";
import Title from "./Titile";
import Count from "./Count";
import Button from "./Button";

function WrapComponent() {
  const [age, setAge] = useState(30);
  const [score, setScore] = useState(100);
  const incrementAge = useCallback(() => setAge(age + 1), [age]);
  const incrementScore = useCallback(() => setScore(score + 1), [score]);
  return (
    <div>
      <Title />
      <Count text="年齢" count={age} />
      <Count text="スコア" count={score} />
      <Button handleClick={incrementAge}>年齢 +</Button>
      <Button handleClick={incrementScore}>スコア +</Button>
    </div>
  );
}

export default WrapComponent;
