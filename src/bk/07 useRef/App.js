import React from "react";
import "./App.css";
import FocusInput from "./component/FocusInput";
import Count from "./component/Count";

function App() {
  return (
    <div className="App">
      <h1>UseRef</h1>
      <FocusInput />
      <Count />
    </div>
  );
}

export default App;
