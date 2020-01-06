import { ISettings } from "./types";

// export const EXPIRATION_TIMEFRAME = 10000;
export const EXPIRATION_TIMEFRAME = 7.2e6;
export const DEFAULT_ROUTE_SLICE = "/weather-app";
export const APP_STRUCTURE = {
  forecast: "forecast",
  favorites: "favorites",
  settings: "settings"
};

export const LOCAL_STORAGE = {
  isDrawerOpen: "isDrawerOpen",
  isThemeDark: "isThemeDark",
};

export const INITIAL_SETTINGS: ISettings = {
  isDrawerOpen: false,
  isThemeDark: false,
  lastLocation: null
};

// Styles -------------------------------------
export const LIST_ITEM_GUTTER_LENGTH = "1rem";
export const SVG_ICON_FONT_SIZE = "1.5rem";

// should be larger than anything in toolbar
export const TOOLBAR_HEIGHT = "4rem";

export const SCALING_FACTOR = "8px";
export const ICON_BUTTON_FONT_SIZE = "1.5rem";

export const drawerIconWidth = `calc(${LIST_ITEM_GUTTER_LENGTH} * 2 + ${SVG_ICON_FONT_SIZE})`;
export const toolbarHeightMin = `calc(${TOOLBAR_HEIGHT} - ${SCALING_FACTOR})`;
export const listItemIconMinWidth = `calc(${SVG_ICON_FONT_SIZE} * 2)`;
