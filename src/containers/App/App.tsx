import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./App.module.scss";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
});

const App: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [defaultCity, setDefaultCity] = React.useState("london");
  const [currentWeather, setCurrentWeather] = React.useState({
    city: "",
    condition: "",
    temperature: ""
  });

  // const useFetch = (url: any) => {
  //   const [data, setData] = React.useState(null);

  // }

  const getWeather = async (city: string) => {
    const OPENWEATHERMAP_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERMAP_KEY}&units=metric`;
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    // console.log('request')
    setCurrentWeather({
      city: json.name,
      condition: json.weather[0].main,
      temperature: String(Math.round(json.main.temp))
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    getWeather(searchValue);
  };

  React.useEffect(() => {
    getWeather(defaultCity);
  }, [defaultCity]);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.root}>
          <header className={styles.header}>
            <h1>Forecast</h1>
            <div className={styles.tools}>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="search">Search</InputLabel>
                  <OutlinedInput
                    id="search"
                    labelWidth={50}
                    type="search"
                    value={searchValue}
                    onChange={event =>
                      setSearchValue(event.currentTarget.value)
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="search"
                          edge="end"
                          type="submit"
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </form>
            </div>
          </header>
          <main>
            <CurrentWeather currentWeather={currentWeather} />
          </main>
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
