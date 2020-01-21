import React, { useReducer, createContext, Dispatch } from "react";
import { SETTINGS } from "../constants";
import reduceSettings, { Action } from "../reducers/reduceSettings";
import useTheme from "../hooks/useTheme";
import useDrawer from "../hooks/useDrawer";

type Props = {
  children: React.ReactNode;
};

export const SettingsContext = createContext(SETTINGS);
export const SettingsDispatchContext = createContext<Dispatch<Action>>(
  () => {}
);

const SettingsProvider = ({ children }: Props) => {
  const [settings, dispatch] = useReducer(reduceSettings, SETTINGS);
  const { isDrawerOpen, isThemeDark } = settings;

  useTheme(dispatch, isThemeDark);
  useDrawer(dispatch, isDrawerOpen);

  return (
    <SettingsContext.Provider value={settings}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
