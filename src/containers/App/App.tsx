import React, { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  StylesProvider,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

import Page from "../../components/Page/Page";
import useSettings from "../../hooks/useSettings";
import useTheme from "../../hooks/useTheme";
import { lightTheme, darkTheme } from "../../theme";
import { LOCAL_STORAGE } from "../../constants";

const GlobalCss = withStyles((theme: Theme) =>
  createStyles({
    "@global": {
      ".MuiTypography-h2": {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
          fontSize: "2rem"
        }
      },
      ".MuiTypography-h3": {
        marginBottom: theme.spacing(1.5),
        [theme.breakpoints.up("sm")]: {
          fontSize: "1.5rem"
        }
      },
      ".MuiIconButton-root": {
        "&:focus": {
          backgroundColor: theme.palette.action.selected
        },
        "&:hover": {
          backgroundColor: theme.palette.action.hover
        },
        "&:active": {
          backgroundColor: theme.palette.action.active,
          color: theme.palette.primary.main
        }
      }
    }
  })
)(() => null);

const App: React.FC = () => {
  const [{ isThemeDark }] = useSettings();
  const { adjustTheme, prefersDarkTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE.isThemeDark);
    if (storedTheme) {
      adjustTheme(JSON.parse(storedTheme));
    } else {
      localStorage.setItem(LOCAL_STORAGE.isThemeDark, String(prefersDarkTheme));
      adjustTheme(prefersDarkTheme);
    }
  }, [adjustTheme, prefersDarkTheme]);

  // console.log('app')
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <GlobalCss />
        <Page />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
