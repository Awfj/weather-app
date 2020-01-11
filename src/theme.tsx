import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";
import {
  LIST_ITEM_GUTTER_SIZE,
  TOOLBAR_HEIGHT,
  ICON_BUTTON_FONT_SIZE,
  SVG_ICON_FONT_SIZE,
  listItemIconMinWidth,
  listItemLeftGutterSize,
  SCALING_FACTOR
} from "./constants";

const baseTheme = {
  pallete: {
    secondary: {
      main: blue[700]
    }
  },
  props: {
    MuiAppBar: {
      elevation: 0
    },
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: 0
      }
    },
    MuiIconButton: {
      root: {
        borderRadius: "0",
        fontSize: ICON_BUTTON_FONT_SIZE,
        padding: "0.5em"
      }
    },
    MuiListItem: {
      gutters: {
        paddingLeft: listItemLeftGutterSize,
        paddingRight: LIST_ITEM_GUTTER_SIZE
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: listItemIconMinWidth
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: SVG_ICON_FONT_SIZE
      }
    },
    MuiToolbar: {
      dense: {
        minHeight: TOOLBAR_HEIGHT
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: "0.8rem"
      }
    }
  },
  typography: {
    h1: {
      fontSize: "2rem"
    },
    h2: {
      fontSize: "2rem"
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 300
    }
  },
  spacing: (factor: number) => `${SCALING_FACTOR * factor}rem`,
  shape: {
    borderRadius: 0
  }
};

export const lightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.pallete,
    action: {
      active: "rgba(0, 0, 0, 0.5)",
      hover: "rgba(0, 0, 0, 0.13)",
      selected: "rgba(0, 0, 0, 0.16)"
    },
    background: {
      default: grey[100]
    },
    primary: {
      main: grey[50]
    }
  }
});

export const darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.pallete,
    action: {
      active: "rgba(255, 255, 255, 0.8)",
      hover: "rgba(255, 255, 255, 0.3)"
    },
    primary: {
      main: grey[900]
    },
    type: "dark"
  }
});
