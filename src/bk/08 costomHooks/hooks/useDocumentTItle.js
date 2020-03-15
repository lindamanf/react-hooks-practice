import React from "react";

function useDocumentTItle(count) {
  React.useEffect(() => {
    document.title = `カウント ${count}`;
  }, [count]);
}

export default useDocumentTItle;
