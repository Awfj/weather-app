import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Welcome from "../../containers/Welcome/Welcome";
import Forecast from "../../containers/Forecast/Forecast";
import Favorites from "../../containers/Favorites/Favorites";
import Settings from "../../containers/Settings/Settings";

import {
  ROUTE_PATH,
  APP_STRUCTURE,
  TOOLBAR_HEIGHT,
  toolbarHeightMin
} from "../../constants";
import useGeoLocationApi from "../../hooks/useGeoLocationApi";
import { SettingsDispatchCtx, SettingsCtx } from "../../contexts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1,
      marginTop: toolbarHeightMin,
      padding: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        marginTop: TOOLBAR_HEIGHT
      }
    }
  })
);

const AppMain = () => {
  const classes = useStyles();
  const dispatchSettings = useContext(SettingsDispatchCtx);
  const { lastLocation, favorites } = useContext(SettingsCtx);
  const [
    { data: launchLocation, isLoading, isError },
    dispatchFetch
  ] = useGeoLocationApi(dispatchSettings);

  // console.log('main')
  // console.log(launchLocation, lastLocation);
  return (
    <main className={classes.root}>
      <Switch>
        {!launchLocation && (
          <Route path={`${ROUTE_PATH}/${APP_STRUCTURE.welcome}`}>
            <Welcome isLoading={isLoading} isError={isError} />
          </Route>
        )}
        {lastLocation && (
          <Route path={`${ROUTE_PATH}/${APP_STRUCTURE.forecast}`}>
            <Forecast lastLocation={lastLocation} />
          </Route>
        )}
        <Route path={`${ROUTE_PATH}/${APP_STRUCTURE.favorites}`}>
          <Favorites
            launchLocation={launchLocation}
            favoriteLocations={favorites}
          />
        </Route>
        <Route path={`${ROUTE_PATH}/${APP_STRUCTURE.settings}`}>
          <Settings launchLocation={launchLocation} dispatchFetch={dispatchFetch} />
        </Route>
        <Route path={`${ROUTE_PATH}/`}>
          {launchLocation ? (
            <Redirect to={`${ROUTE_PATH}/${APP_STRUCTURE.forecast}`} />
          ) : (
            <Redirect to={`${ROUTE_PATH}/${APP_STRUCTURE.welcome}`} />
          )}
        </Route>
      </Switch>
    </main>
  );
};

export default AppMain;
