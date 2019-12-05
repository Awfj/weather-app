import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import {
  checkIfExpired,
  getCurrentWeather,
  getDefaultCity,
  removeExpiredWeather
} from "../../utils";
import { ICurrentWeather } from "../../types";

import styles from "./App.module.scss";
import AppHeader from "../AppHeader/AppHeader";
import Forecast from "../Forecast/Forecast";
import CurrentWeather from "../Forecast/CurrentWeather/CurrentWeather";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
});

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = React.useState<ICurrentWeather>({
    city: "",
    condition: "",
    country: "",
    temperature: ""
  });

  const getWeather = React.useCallback(async (queriedCity: string) => {
    removeExpiredWeather(queriedCity);
    const storedWeather = localStorage.getItem(`weather_${queriedCity}`);
    let currentWeather: ICurrentWeather;
    if (storedWeather) {
      const { requestTime } = JSON.parse(storedWeather);
      if (checkIfExpired(requestTime)) {
        currentWeather = await getCurrentWeather(queriedCity);
      } else {
        currentWeather = JSON.parse(storedWeather);
      }
    } else {
      currentWeather = await getCurrentWeather(queriedCity);
    }
    const { city, condition, country, temperature } = currentWeather;
    setCurrentWeather({
      city,
      condition,
      country,
      temperature
    });
  }, []);

  const getInitialWeather = React.useCallback(async () => {
    const defaultCity = await getDefaultCity();
    removeExpiredWeather(defaultCity);
    getWeather(defaultCity);
  }, [getWeather]);

  React.useEffect(() => {
    getInitialWeather();
  }, [getInitialWeather]);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.root}>
          <AppHeader onGetWeather={getWeather} />
          <main>
            <Forecast
              CurrentWeather={<CurrentWeather data={currentWeather} />}
            />
          </main>
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
