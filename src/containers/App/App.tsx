import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

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
    temperature: ""
  });

  const makeRequest = async (parameter: string) => {
    const OPENWEATHERMAP_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${parameter}&appid=${OPENWEATHERMAP_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const city = data.name;
    const condition = data.weather[0].main;
    const temperature = String(Math.round(data.main.temp));

    localStorage.setItem(
      "currentWeather",
      JSON.stringify({
        city,
        condition,
        temperature
      })
    );
    setCurrentWeather({
      city,
      condition,
      temperature
    });
  };

  const getWeather = React.useCallback((city: string) => {
    let currentWeather = localStorage.getItem("currentWeather");
    if (currentWeather) {
      const { city, condition, temperature } = JSON.parse(currentWeather);
      setCurrentWeather({
        city,
        condition,
        temperature
      });
    } else {
      makeRequest(city);
    }
  }, []);

  const findLocation = async (): Promise<string> => {
    const response = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
    const data = await response.json();
    return data.city;
  };

  const getInitialWeather = React.useCallback(async () => {
    let city = localStorage.getItem("defaultCity");
    if (!city) {
      city = await findLocation();
      localStorage.setItem("defaultCity", city);
    }
    getWeather(city);
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
