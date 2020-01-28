import React, { useReducer, createContext, Dispatch } from "react";
import reduceSettings, { Action } from "../reducers/reduceSettings";
import { ISettings } from "../types";

export const initialSettings: ISettings = {
  favorites: [],
  isDrawerOpen: false,
  isThemeDark: false,
  lastLocation: null,
  temperatureScale: "celsius"
};

export const SettingsContext = createContext(initialSettings);
export const SettingsDispatchContext = createContext<Dispatch<Action>>(
  () => {}
);

type Props = {
  children: React.ReactNode;
};

const SettingsProvider = ({ children }: Props) => {
  const [settings, dispatch] = useReducer(reduceSettings, initialSettings);

  return (
    <SettingsDispatchContext.Provider value={dispatch}>
      <SettingsContext.Provider value={settings}>
        {children}
      </SettingsContext.Provider>
    </SettingsDispatchContext.Provider>
  );
};

export default SettingsProvider;
