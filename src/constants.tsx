import {
  ISettings,
  IAppStructure,
  IInteractiveActions,
  ILocalStorage
} from "./types";

// export const EXPIRATION_TIMEFRAME = 3660000;
export const EXPIRATION_TIMEFRAME = 7.2e6;
export const APP_STRUCTURE: IAppStructure = {
  welcome: "welcome",
  forecast: "forecast",
  favorites: "favorites",
  settings: "settings"
};

export const INTERACTIVE_ACTIONS: IInteractiveActions = {
  open: "open",
  close: "close",
  toggle: "toggle"
};

export const LOCAL_STORAGE: ILocalStorage = {
  isDrawerOpen: "isDrawerOpen",
  isThemeDark: "isThemeDark",
  weatherForecast: "weather_forecast_",
  launchLocation: "launch_location"
};

export const SETTINGS: ISettings = {
  favorites: [],
  isDrawerOpen: false,
  isThemeDark: false,
  lastLocation: null
};

export const DRAWER_BREAKPOINT = "md";

// Styles -------------------------------------
export const LIST_ITEM_GUTTER_SIZE = "1rem";
export const SVG_ICON_FONT_SIZE = "1.5rem";
export const ACTIVE_LINK_BORDER_SIZE = "0.375rem";

// should be larger than anything in toolbar
export const TOOLBAR_HEIGHT = "4rem";

export const SCALING_FACTOR = 0.5;

export const drawerIconWidth = `calc(${LIST_ITEM_GUTTER_SIZE} * 2 + ${SVG_ICON_FONT_SIZE})`;
export const toolbarHeightMin = `calc(${TOOLBAR_HEIGHT} - ${SCALING_FACTOR}rem)`;
export const listItemIconMinWidth = `calc(${SVG_ICON_FONT_SIZE} * 2)`;
