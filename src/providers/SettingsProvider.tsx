import React, { useReducer, useContext, createContext, Dispatch } from "react";
import { INITIAL_SETTINGS } from "../constants";
import reduceSettings, { Action } from "../reducers/reduceSettings";
import useTheme from "../hooks/useTheme";
import useDrawer from "../hooks/useDrawer";

type Props = {
  children: React.ReactNode;
};

const SettingsContext = createContext(INITIAL_SETTINGS);
const SettingsDispatchContext = createContext<Dispatch<Action>>(() => {});

export const useSettings = () => {
  const settings = useContext(SettingsContext);
  const dispatch = useContext(SettingsDispatchContext);
  return [settings, dispatch] as const;
};

const SettingsProvider = ({ children }: Props) => {
  const [settings, dispatch] = useReducer(reduceSettings, INITIAL_SETTINGS);
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
