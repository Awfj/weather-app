import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";

import Page from "../../components/Page/Page";
import { useSettings } from "../../providers/SettingsProvider";
import { lightTheme, darkTheme } from "../../theme";

const App: React.FC = () => {
  const [{ isThemeDark }] = useSettings();

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Page />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
