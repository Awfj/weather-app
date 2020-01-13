import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../../containers/Forecast/Forecast";
import Favorites from "../../containers/Favorites/Favorites";
import Settings from "../../containers/Settings/Settings";
// import NoMatch from "../../containers/NoMatch/NoMatch";

import {
  DEFAULT_ROUTE_SLICE,
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

  return (
    <main className={classes.root}>
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        error={`We couldn't find your city automatically,
         you can still look for it manually.`}
      >
        <Switch>
          <Route exact path={`${DEFAULT_ROUTE_SLICE}/`}>
            <Redirect to={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.forecast}`} />
          </Route>
          {lastLocation && (
            <Route path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.forecast}`}>
              <Forecast lastLocation={lastLocation} />
            </Route>
          )}
          {launchLocation && (
            <Route path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.favorites}`}>
              <Favorites
                launchLocation={launchLocation}
                favoriteLocations={favorites}
              />
            </Route>
          )}
          {launchLocation && (
            <Route path={`${DEFAULT_ROUTE_SLICE}/${APP_STRUCTURE.settings}`}>
              <Settings
                launchLocation={launchLocation}
                dispatchFetch={dispatchFetch}
              />
            </Route>
          )}
          {/* <Route path="*">
            <NoMatch />
          </Route> */}
        </Switch>
      </DataLoader>
    </main>
  );
};

export default AppMain;
