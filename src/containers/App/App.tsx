import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../Forecast/Forecast";
import Favorites from "../Favorites/Favorites";
import { lightTheme, darkTheme } from "../../theme";
import { DEFAULT_ROUTE_SLICE, APP_STRUCTURE } from "../../constants";
import useGeoLocationApi from "../../hooks/useGeoLocationApi";
import useTheme from "../../hooks/useTheme";

const App: React.FC = () => {
  const [{ data: launchLocation, isLoading, isError }] = useGeoLocationApi();
  const [lastLocation, setLastLocation] = React.useState<string | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useTheme();

  React.useEffect(() => {
    if (launchLocation) setLastLocation(launchLocation);
  }, [launchLocation]);

  // console.log('app');
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <DataLoader
          isLoading={isLoading}
          isError={isError}
          error={`We couldn't find your city automatically,
         you can still look for it manually.`}
        >
          <Router>
            <Switch>
              <Route path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FORECAST}`}>
                {lastLocation && (
                  <Forecast
                    lastLocation={lastLocation}
                    setLastLocation={setLastLocation}
                    isDarkTheme={isDarkTheme}
                    setIsDarkTheme={setIsDarkTheme}
                  />
                )}
              </Route>
              <Route path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FAVORITES}`}>
                <Favorites />
              </Route>
              <Route path={`${DEFAULT_ROUTE_SLICE}/`}>
                <Redirect
                  to={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FORECAST}`}
                />
              </Route>
            </Switch>
          </Router>
        </DataLoader>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
