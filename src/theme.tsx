import { createMuiTheme } from '@material-ui/core/styles';
import grey from "@material-ui/core/colors/grey";
// import red from "@material-ui/core/colors/red";

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
        border: "1px solid",
        borderRadius: "0",
        padding: "0.4em"
      }
    },
    MuiList: {
      padding: {
        paddingTop: 0
      }
    },
    MuiToolbar: {
      dense: {
        minHeight: 64
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
      hover: "rgba(0, 0, 0, 0.13)"
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
