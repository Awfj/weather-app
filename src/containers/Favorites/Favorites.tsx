import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Page from "../../components/Page/Page";
import WeatherBox from "../../components/WeatherBox/WeatherBox";
import { APP_STRUCTURE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 40)
    }
  })
);

type Props = {
  launchLocation: string;
};

const Favorites = ({ launchLocation }: Props) => {
  const classes = useStyles();
  return (
    <Page heading={APP_STRUCTURE.favorites} className={classes.root}>
      <Typography variant="h2">Launch Location</Typography>
      <WeatherBox location={launchLocation} />
    </Page>
  );
};

export default Favorites;
