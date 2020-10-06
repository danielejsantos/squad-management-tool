import React, { createContext, useReducer, useContext } from "react";

import { initialState, reducer, InitialState } from "./teamsReducer";

interface TeamsContextTypes {
  state: InitialState;
  dispatch: (payload: any) => void;
}

const TeamsContext = createContext<TeamsContextTypes>({} as TeamsContextTypes);

const TeamsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  const value = { state, dispatch };

  return (
    // @ts-ignore
    <TeamsContext.Provider value={value}>{children}</TeamsContext.Provider>
  );
};

const useTeams = () => {
  const context = useContext(TeamsContext);

  if (!context) {
    throw new Error("useTeams must be used within an TeamsProvider");
  }

  return context;
};

export { TeamsProvider, useTeams };
