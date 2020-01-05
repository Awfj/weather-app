import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../Forecast/Forecast";
import Favorites from "../Favorites/Favorites";

import { lightTheme, darkTheme } from "../../theme";
import { DEFAULT_ROUTE_SLICE, APP_STRUCTURE } from "../../constants";
import useGeoLocationApi from "../../hooks/useGeoLocationApi";
import useSettings from "../../hooks/useSettings";
import { SettingsDispatch } from "../../contexts";

const App: React.FC = () => {
  const [
    { isDrawerOpen, isDarkTheme, lastLocation },
    dispatchSettings
  ] = useSettings();
  const [{ isLoading, isError }] = useGeoLocationApi(dispatchSettings);

  // console.log("app", lastLocation, isDrawerOpen);
  console.log(isDarkTheme);
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
          <Switch>
            <SettingsDispatch.Provider value={dispatchSettings}>
              <Route path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FORECAST}`}>
                {lastLocation && (
                  <Forecast
                    lastLocation={lastLocation}
                    isDrawerOpen={isDrawerOpen}
                    isDarkTheme={isDarkTheme}
                  />
                )}
              </Route>
              <Route path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FAVORITES}`}>
                <Favorites isDrawerOpen={isDrawerOpen} />
              </Route>
              <Route path={`${DEFAULT_ROUTE_SLICE}/`}>
                <Redirect
                  to={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FORECAST}`}
                />
              </Route>
            </SettingsDispatch.Provider>
          </Switch>
        </DataLoader>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
