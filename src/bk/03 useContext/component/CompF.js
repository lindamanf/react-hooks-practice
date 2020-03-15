import React, { useContext } from "react";
import { UserContext, LanguageContect } from "../App_reducer_axios";

function CompF() {
  const user = useContext(UserContext);
  const language = useContext(LanguageContect);

  return (
    <div>
      <div>{`${user.name}: ${language}`}</div>
      {/* <UserContext.Consumer>
        {user => {
          return (
            <LanguageContect.Consumer>
              {language => {
                return <div>{`${user.name}: ${language}`}</div>;
              }}
            </LanguageContect.Consumer>
          );
        }}
      </UserContext.Consumer> */}
    </div>
  );
}

export default CompF;
