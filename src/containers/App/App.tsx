import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { checkIfExpired, getDefaultCity, removeExpiredData } from "../../utils";

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
  const [currentWeather, setCurrentWeather] = React.useState({
    city: "",
    condition: "",
    country: "",
    temperature: ""
  });

  const makeRequest = async (parameter: string) => {
    const OPENWEATHERMAP_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${parameter}&appid=${OPENWEATHERMAP_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const city = data.name;
    const condition = data.weather[0].main;
    const country = data.sys.country;
    const temperature = String(Math.round(data.main.temp));
    const requestTime = new Date().getTime();

    localStorage.setItem(
      `weather_${city.toLowerCase()}`,
      JSON.stringify({
        city,
        condition,
        country,
        temperature,
        requestTime
      })
    );
    setCurrentWeather({
      city,
      condition,
      country,
      temperature
    });
  };

  const getWeather = React.useCallback((city: string) => {
    removeExpiredData(city);
    const currentWeather = localStorage.getItem(`weather_${city}`);
    if (currentWeather) {
      const { city, requestTime } = JSON.parse(currentWeather);
      if (checkIfExpired(requestTime)) {
        makeRequest(city);
      } else {
        const { condition, country, temperature } = JSON.parse(currentWeather);
        setCurrentWeather({
          city,
          condition,
          country,
          temperature
        });
      }
    } else {
      makeRequest(city);
    }
  }, []);

  const getInitialWeather = React.useCallback(async () => {
    const defaultCity = await getDefaultCity();
    removeExpiredData(defaultCity);
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
