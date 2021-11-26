import React from "react";
import { ActionsProvider } from "./Provider";
import Actions from "./Actions";

const ActionsContainer = () => {
  return (
    <ActionsProvider>
      <Actions />
    </ActionsProvider>
  );
};
export default ActionsContainer;
