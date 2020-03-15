import React from "react";

function FocusInput() {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text"></input>
    </div>
  );
}

export default FocusInput;
