import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
// import red from "@material-ui/core/colors/red";
import {
  LIST_ITEM_GUTTER_LENGTH,
  TOOLBAR_HEIGHT,
  ICON_BUTTON_FONT_SIZE,
  SVG_ICON_FONT_SIZE,
  listItemIconMinWidth
} from "./constants";

const baseTheme = {
  pallete: {},
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
        paddingLeft: LIST_ITEM_GUTTER_LENGTH,
        paddingRight: LIST_ITEM_GUTTER_LENGTH
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
    }
  },
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
      default: grey[200]
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
