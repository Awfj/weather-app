import React, { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";

import Page from "../../components/Page/Page";
import useSettings from "../../hooks/useSettings";
import useTheme from "../../hooks/useTheme";
import { lightTheme, darkTheme } from "../../theme";
import { LOCAL_STORAGE } from "../../constants";

const App: React.FC = () => {
  const [{ isThemeDark }] = useSettings();
  const { adjustTheme, prefersDarkTheme } = useTheme();

  useEffect(() => {
    console.log("effect");
    let storedTheme = localStorage.getItem(LOCAL_STORAGE.isThemeDark);
    if (storedTheme) {
      adjustTheme(JSON.parse(storedTheme));
    } else {
      localStorage.setItem(LOCAL_STORAGE.isThemeDark, String(prefersDarkTheme));
      adjustTheme(prefersDarkTheme);
    }
  }, [adjustTheme, prefersDarkTheme]);

  // console.log('app', isThemeDark)
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
