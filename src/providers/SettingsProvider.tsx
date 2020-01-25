import React, { useReducer, createContext, Dispatch } from "react";
import { SETTINGS } from "../constants";
import reduceSettings, { Action } from "../reducers/reduceSettings";

type Props = {
  children: React.ReactNode;
};

export const SettingsContext = createContext(SETTINGS);
export const SettingsDispatchContext = createContext<Dispatch<Action>>(
  () => {}
);

const SettingsProvider = ({ children }: Props) => {
  const [settings, dispatch] = useReducer(reduceSettings, SETTINGS);

  return (
    <SettingsDispatchContext.Provider value={dispatch}>
      <SettingsContext.Provider value={settings}>
        {children}
      </SettingsContext.Provider>
    </SettingsDispatchContext.Provider>
  );
};

export default SettingsProvider;
