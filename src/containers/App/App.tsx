import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../Forecast/Forecast";
import Favorites from "../Favorites/Favorites";
import Settings from "../Settings/Settings";
import NoMatch from "../NoMatch/NoMatch";

import { lightTheme, darkTheme } from "../../theme";
import { DEFAULT_ROUTE_SLICE, APP_STRUCTURE } from "../../constants";
import useGeoLocationApi from "../../hooks/useGeoLocationApi";
import useSettings from "../../hooks/useSettings";
import { SettingsDispatchCtx, SettingsCtx } from "../../contexts";

const App: React.FC = () => {
  const [settings, dispatchSettings] = useSettings();
  const [
    { data: launchLocation, isLoading, isError },
    dispatchFetch
  ] = useGeoLocationApi(dispatchSettings);

  // console.log("app", settings.lastLocation, launchLocation);
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={settings.isThemeDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <DataLoader
          isLoading={isLoading}
          isError={isError}
          error={`We couldn't find your city automatically,
         you can still look for it manually.`}
        >
          <SettingsDispatchCtx.Provider value={dispatchSettings}>
            <SettingsCtx.Provider value={settings}>
              <Switch>
                <Route exact path={`${DEFAULT_ROUTE_SLICE}/`}>
                  <Redirect
                    to={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.forecast}`}
                  />
                </Route>
                {settings.lastLocation && (
                  <Route
                    path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.forecast}`}
                  >
                    <Forecast lastLocation={settings.lastLocation} />
                  </Route>
                )}
                {launchLocation && (
                  <>
                    <Route
                      path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.favorites}`}
                    >
                      <Favorites
                        launchLocation={launchLocation}
                        favoriteLocations={settings.favorites}
                      />
                    </Route>
                    <Route
                      path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.settings}`}
                    >
                      <Settings
                        launchLocation={launchLocation}
                        dispatchFetch={dispatchFetch}
                      />
                    </Route>
                  </>
                )}
                <Route>
                  <NoMatch />
                </Route>
              </Switch>
            </SettingsCtx.Provider>
          </SettingsDispatchCtx.Provider>
        </DataLoader>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
