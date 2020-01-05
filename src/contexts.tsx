import { createContext, Dispatch } from "react";
import { Action as SettingsAction } from "./hooks/useSettings";

export const SettingsDispatch = createContext<Dispatch<SettingsAction>>(
  () => {}
);
export const WindowWidth = createContext(0);
