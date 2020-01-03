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
import useTheme from "../../hooks/useTheme";
import useSettings, { Action as SettingsAction } from "../../hooks/useSettings";
import { TOGGLE_DRAWER, SET_LAST_LOCATION } from "../../actions";
import useContextReducer from "../../createCtx";

export const SettingsDispatch = React.createContext<React.Dispatch<
  SettingsAction
> | null>(null);

export const [useCtx, SettingsProvider] = useContextReducer<
  React.Dispatch<SettingsAction>
>();

const App: React.FC = () => {
  const [{ data: launchLocation, isLoading, isError }] = useGeoLocationApi();
  const [isDarkTheme, setIsDarkTheme] = useTheme();
  const [{ isDrawerOpen, lastLocation }, dispatch] = useSettings();

  const toggleDrawer = () => {
    dispatch({ type: TOGGLE_DRAWER });
    // console.log(!isDrawerOpen);
    // const launchSettings = {
    //   isDrawerOpen: !isDrawerOpen
    // };
    // localStorage.setItem("launch_settings", JSON.stringify(launchSettings));
  };

  // const storeSettings = (settings: any, setting: any) => {
  //   const launchSettings = {
  //     ...settings,
  //     isDrawerOpen: isDrawerOpen
  //   };
  //   localStorage.setItem("launch_settings", JSON.stringify(launchSettings));
  // };

  // React.useEffect(() => {
  //   const launchSettings = localStorage.getItem("launch_settings");
  //   if (launchSettings) {
  //     const parsed = JSON.parse(launchSettings);
  //     dispatch({ type: TOGGLE_DRAWER });
  //     // setIsDrawerOpen(parsed.isDrawerOpen);
  //     // console.log(JSON.parse(launchSettings).isDrawerOpen)
  //   } else {
  //     const launchSettings = {
  //       isDrawerOpen: !isDrawerOpen
  //     };
  //     localStorage.setItem("launch_settings", JSON.stringify(launchSettings));
  //   }
  // }, []);

  React.useEffect(() => {
    if (launchLocation) {
      dispatch({ type: SET_LAST_LOCATION, lastLocation: launchLocation });
    }
  }, [launchLocation, dispatch]);

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
            <SettingsProvider value={dispatch}>
              <SettingsDispatch.Provider value={dispatch}>
                <Route
                  path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FORECAST}`}
                >
                  {lastLocation && (
                    <Forecast
                      lastLocation={lastLocation}
                      isDrawerOpen={isDrawerOpen}
                      toggleDrawer={toggleDrawer}
                      isDarkTheme={isDarkTheme}
                      setIsDarkTheme={setIsDarkTheme}
                    />
                  )}
                </Route>
                <Route
                  path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FAVORITES}`}
                >
                  <Favorites
                    isDrawerOpen={isDrawerOpen}
                    toggleDrawer={toggleDrawer}
                  />
                </Route>
                <Route path={`${DEFAULT_ROUTE_SLICE}/`}>
                  <Redirect
                    to={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.FORECAST}`}
                  />
                </Route>
              </SettingsDispatch.Provider>
            </SettingsProvider>
          </Switch>
        </DataLoader>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
