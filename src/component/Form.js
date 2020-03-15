import React from "react";
import useInput from "../hooks/useInput";

function Form() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Hello, ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default Form;
