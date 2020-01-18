import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import FrontPage from "../../containers/FrontPage/FrontPage";
import Favorites from "../../containers/Favorites/Favorites";
import Settings from "../../containers/Settings/Settings";

import {
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
      padding: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        marginTop: TOOLBAR_HEIGHT,
        padding: theme.spacing(4, 6)
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

  // console.log('main', launchLocation, lastLocation);
  return (
    <main className={classes.root}>
      <Switch>
        <Route path={`/${APP_STRUCTURE.forecast}`}>
          <FrontPage
            lastLocation={lastLocation}
            isLoading={isLoading}
            isError={isError}
          />
        </Route>
        <Route path={`/${APP_STRUCTURE.favorites}`}>
          <Favorites launchLocation={launchLocation} favorites={favorites} />
        </Route>
        <Route path={`/${APP_STRUCTURE.settings}`}>
          <Settings
            launchLocation={launchLocation}
            dispatchFetch={dispatchFetch}
          />
        </Route>
        <Route path={`/`}>
          <Redirect to={`/${APP_STRUCTURE.forecast}`} />
        </Route>
      </Switch>
    </main>
  );
};

export default AppMain;
