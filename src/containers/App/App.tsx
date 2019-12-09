import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

// import styles from "./App.module.scss";
import Forecast from "../Forecast/Forecast";
import { getLaunchLocation } from "../../utils";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
});

// const locationDispatch = React.createContext(null);

const App: React.FC = () => {
  const [lastLocation, setLastLocation] = React.useState<string | null>(
    null
  );
  // const [location, dispatch] = React.useReducer()

  React.useEffect(() => {
    const getLaunchWeather = async () => {
      const launchLocation = await getLaunchLocation();
      if (launchLocation) {
        setLastLocation(launchLocation);
      }
      //  else {
      //   const errorMessage = `We couldn't find your city automatically,
      //    you can still look for it manually.`;
      //   dispatch({ type: FETCH_FAILURE, errorMessage });
      // }
    };
    getLaunchWeather();
  }, []);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {lastLocation && (
          <Forecast
            lastLocation={lastLocation}
            onSetLastLocation={setLastLocation}
          />
        )}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
