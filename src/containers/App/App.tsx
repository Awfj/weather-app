import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import styles from "./App.module.scss";
import AppHeader from "../AppHeader/AppHeader";
import Forecast from "../Forecast/Forecast";
import CurrentWeather from "../Forecast/CurrentWeather/CurrentWeather";
import { useWeatherApi } from "../../hooks/useWeatherApi";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
});

const App: React.FC = () => {
  const [
    { currentWeather, errorMessage, isLoading },
    getWeather
  ] = useWeatherApi();

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.root}>
          <AppHeader onGetWeather={getWeather} />
          <main>
            {isLoading && <p>Loading...</p>}
            {currentWeather && !errorMessage ? (
              <Forecast
                CurrentWeather={<CurrentWeather data={currentWeather} />}
              />
            ) : (
              <p>{errorMessage}</p>
            )}
          </main>
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
