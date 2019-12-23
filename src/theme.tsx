import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
});

theme.overrides = {
  MuiIconButton: {
    root: {
      borderRadius: "5px",
      padding: '0.4em'
    }
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: 'black',
      border: '1px solid grey',
      borderRadius: '0',
      fontSize: '0.8rem'
    }
  }
};

export default theme;
