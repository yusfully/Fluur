import React, { createContext, useContext, useState } from "react";

const ActionsContext = createContext();

const initialState = {
  firstAction: 0,
  secondAction: 0,
};
export const ActionsProvider = ({ children }) => {
  const [actionsState, setActionsState] = useState(initialState);

  return (
    <ActionsContext.Provider value={{ actionsState, setActionsState }}>
        {children}
    </ActionsContext.Provider>
  );
};

export const useActionsContext = () => useContext(ActionsContext);