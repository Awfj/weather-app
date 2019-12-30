export const BREAKPOINTS = {
  XS: 0,
  SM: 600,
  MD: 960,
  LG: 1280,
  XL: 1920
};

// export const EXPIRATION_TIMEFRAME = 10000;
export const EXPIRATION_TIMEFRAME = 7.2e6;

export const LIST_ITEM_GUTTER_LENGTH = "1rem";
export const SVG_ICON_FONT_SIZE = "1.5rem";
export const TOOLBAR_HEIGHT = "4rem";
export const SCALING_FACTOR = "8px";

export const drawerIconWidth = `calc(${LIST_ITEM_GUTTER_LENGTH} * 2 + ${SVG_ICON_FONT_SIZE})`;
export const toolbarHeightMin = `calc(${TOOLBAR_HEIGHT} - ${SCALING_FACTOR})`;
