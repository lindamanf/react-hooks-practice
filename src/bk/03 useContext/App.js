import React, { createContext, useState } from "react";
import "./App.css";
import CompC from "./component/CompC";

export const UserContext = createContext();
export const LanguageContect = createContext();

function App() {
  const [user, setUser] = useState({ name: "hayashi", age: "27" });
  const [language, setLanguage] = useState("ja");
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LanguageContect.Provider value={langua}>
          <CompC />
        </LanguageContect.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
