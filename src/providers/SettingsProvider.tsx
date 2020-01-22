import React, { useReducer, createContext, Dispatch } from "react";
import { SETTINGS } from "../constants";
import reduceSettings, { Action } from "../reducers/reduceSettings";
import useTheme from "../hooks/useTheme";

type Props = {
  children: React.ReactNode;
};

export const SettingsContext = createContext(SETTINGS);
export const SettingsDispatchContext = createContext<Dispatch<Action>>(
  () => {}
);

const SettingsProvider = ({ children }: Props) => {
  const [settings, dispatch] = useReducer(reduceSettings, SETTINGS);
  const { isThemeDark } = settings;

  useTheme(dispatch, isThemeDark);

  return (
    <SettingsDispatchContext.Provider value={dispatch}>
      <SettingsContext.Provider value={settings}>
        {children}
      </SettingsContext.Provider>
    </SettingsDispatchContext.Provider>
  );
};

export default SettingsProvider;
