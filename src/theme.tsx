import { createMuiTheme } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
// import red from "@material-ui/core/colors/red";

const baseTheme = {
  pallete: {},
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiIconButton: {
      root: {
        border: "1px solid",
        borderRadius: "0",
        padding: "0.4em"
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: "0",
        fontSize: "0.8rem"
      }
    },
    MuiTouchRipple: {
      child: {
        borderRadius: "5px"
      }
    }
  },
  typography: {
    h1: {
      fontSize: '2rem'
    }
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
    primary: {
      main: grey[100]
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