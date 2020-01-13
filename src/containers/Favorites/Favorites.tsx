import React from "react";

import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AppHeader from "../../components/AppHeader/AppHeader";
import LaunchLocation from "../../components/LaunchLocation/LaunchLocation";
import FavoritePlace from "../../components/FavoritePlace/FavoritePlace";
import { APP_STRUCTURE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 40),
      "& section:not(:last-child)": {
        marginBottom: theme.spacing(4)
      }
    },
    favorites: {
      display: "flex",
      "& div:not(:last-child)": {
        marginRight: theme.spacing(2)
      }
    }
  })
);

type Props = {
  launchLocation: string;
  favoriteLocations: string[];
};

const Favorites = ({ launchLocation, favoriteLocations }: Props) => {
  const classes = useStyles();
  // console.log(favoriteLocations)
  // console.log('favorites')
  return (
    <>
      <AppHeader heading={APP_STRUCTURE.favorites} />
      <div className={classes.root}>
        <section>
          <Typography variant="h2">Launch Location</Typography>
          <LaunchLocation location={launchLocation} />
        </section>
        <section>
          <Typography variant="h2">Favorite Places</Typography>
          <div className={classes.favorites}>
            {favoriteLocations.map((place, index) => (
              <FavoritePlace key={place} id={index} location={place} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Favorites;
