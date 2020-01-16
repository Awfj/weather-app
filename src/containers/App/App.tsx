import React from "react";

import {
  ThemeProvider,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";

import AppDrawer from "../../components/AppDrawer/AppDrawer";
import AppContent from "../../components/AppContent/AppContent";

import { lightTheme, darkTheme } from "../../theme";
import useSettings from "../../hooks/useSettings";
import { SettingsDispatchCtx, SettingsCtx } from "../../contexts";
import useWindowWidth from "../../hooks/useWindowWidth";
import { WindowWidthCtx } from "../../contexts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& h2": {
        marginBottom: "1rem"
      },
      "& h3": {
        marginBottom: "0.75rem"
      },
      "& button, & a": {
        "&:focus": {
          backgroundColor: theme.palette.action.selected
        },
        "&:hover": {
          backgroundColor: theme.palette.action.hover
        },
        "&:active": {
          backgroundColor: theme.palette.action.active,
          color: theme.palette.primary.contrastText
        }
      },
      "& a:active": {
        "& *": {
          color: theme.palette.primary.contrastText
        }
      }
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const windowWidth = useWindowWidth();
  const [settings, dispatchSettings] = useSettings();

  // console.log("app", settings);
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={settings.isThemeDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <WindowWidthCtx.Provider value={windowWidth}>
          <SettingsDispatchCtx.Provider value={dispatchSettings}>
            <SettingsCtx.Provider value={settings}>
              <div className={classes.root}>
                <AppDrawer />
                <AppContent />
              </div>
            </SettingsCtx.Provider>
          </SettingsDispatchCtx.Provider>
        </WindowWidthCtx.Provider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
