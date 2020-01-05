import { createContext, Dispatch } from "react";

import { Action as SettingsAction } from "./hooks/useSettings";
import { INITIAL_SETTINGS } from "./constants";

export const SettingsDispatchCtx = createContext<Dispatch<SettingsAction>>(
  () => {}
);
export const SettingsCtx = createContext(INITIAL_SETTINGS);
export const WindowWidthCtx = createContext(0);
