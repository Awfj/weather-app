import React from "react";
import { Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../Forecast/Forecast";
import Favorites from "../Favorites/Favorites";
import Settings from "../Settings/Settings";

import { lightTheme, darkTheme } from "../../theme";
import { DEFAULT_ROUTE_SLICE, APP_STRUCTURE } from "../../constants";
import useGeoLocationApi from "../../hooks/useGeoLocationApi";
import useSettings from "../../hooks/useSettings";
import { SettingsDispatchCtx, SettingsCtx } from "../../contexts";

const App: React.FC = () => {
  const [settings, dispatchSettings] = useSettings();
  const { data: launchLocation, isLoading, isError } = useGeoLocationApi(
    dispatchSettings
  );

  // console.log("app", settings.lastLocation);
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
          <Switch>
            <SettingsDispatchCtx.Provider value={dispatchSettings}>
              <SettingsCtx.Provider value={settings}>
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
                      <Favorites launchLocation={launchLocation} />
                    </Route>
                    <Route
                      path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.settings}`}
                    >
                      <Settings launchLocation={launchLocation} />
                    </Route>
                  </>
                )}
                {/* <Route path={`${DEFAULT_ROUTE_SLICE}/`}>
                  <Redirect
                    to={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.forecast}`}
                  />
                </Route> */}
              </SettingsCtx.Provider>
            </SettingsDispatchCtx.Provider>
          </Switch>
        </DataLoader>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
