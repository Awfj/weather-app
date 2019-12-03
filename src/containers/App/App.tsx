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
  const [defaultCity, setDefaultCity] = React.useState("london");
  const [currentWeather, setCurrentWeather] = React.useState({
    city: "",
    condition: "",
    temperature: ""
  });

  const getWeather = async (city: string) => {
    const OPENWEATHERMAP_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERMAP_KEY}&units=metric`;
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    console.log("request");
    setCurrentWeather({
      city: json.name,
      condition: json.weather[0].main,
      temperature: String(Math.round(json.main.temp))
    });
  };

  React.useEffect(() => {
    getWeather(defaultCity);
  }, [defaultCity]);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.root}>
          <AppHeader onGetWeather={getWeather} />
          <main>
            <Forecast
              CurrentWeather={
                <CurrentWeather data={currentWeather} />
              }
            />
          </main>
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
