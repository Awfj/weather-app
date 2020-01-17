import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";

import Page from "../../components/Page/Page";

import { lightTheme, darkTheme } from "../../theme";
import useSettings from "../../hooks/useSettings";
import { SettingsDispatchCtx, SettingsCtx } from "../../contexts";
import useWindowWidth from "../../hooks/useWindowWidth";
import { WindowWidthCtx } from "../../contexts";

const App: React.FC = () => {
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
              <Page />
            </SettingsCtx.Provider>
          </SettingsDispatchCtx.Provider>
        </WindowWidthCtx.Provider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
