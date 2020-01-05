import React, { useEffect } from "react";
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
import useTheme from "../../hooks/useTheme";
import useSettings, { State as TSettings } from "../../hooks/useSettings";
import { SET_LAST_LOCATION } from "../../actions";
import { SettingsDispatch } from "../../contexts";
// import { STORAGE_KEYS } from "../../constants";

const App: React.FC = () => {
  const [{ data: launchLocation, isLoading, isError }] = useGeoLocationApi();
  const [isDarkTheme, setIsDarkTheme] = useTheme();
  const [{ isDrawerOpen, lastLocation }, dispatch] = useSettings();

  useEffect(() => {
    if (launchLocation) {
      dispatch({ type: SET_LAST_LOCATION, lastLocation: launchLocation });
    }
  }, [dispatch, launchLocation]);

  // console.log("app", lastLocation, isDrawerOpen);
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
            <SettingsDispatch.Provider value={dispatch}>
              <Route path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FORECAST}`}>
                {lastLocation && (
                  <Forecast
                    lastLocation={lastLocation}
                    isDrawerOpen={isDrawerOpen}
                    isDarkTheme={isDarkTheme}
                    setIsDarkTheme={setIsDarkTheme}
                  />
                )}
              </Route>
              <Route path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FAVORITES}`}>
                <Favorites
                  isDrawerOpen={isDrawerOpen}
                />
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
