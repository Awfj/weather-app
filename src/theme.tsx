import { createMuiTheme } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const baseTheme = {
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiIconButton: {
      root: {
        border: "1px solid",
        borderRadius: "5px",
        padding: "0.4em"
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "black",
        border: "1px solid grey",
        borderRadius: "0",
        fontSize: "0.8rem"
      }
    },
    MuiTouchRipple: {
      child: {
        borderRadius: "5px"
      }
    }
  }
};

export const lightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    secondary: grey
  }
});

export const darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "dark"
  }
});
