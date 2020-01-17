import React from "react";

import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AppHeader from "../../components/AppHeader/AppHeader";
import LaunchLocation from "../../components/LaunchLocation/LaunchLocation";
import AddLocationBox from "../../components/AddLocationBox/AddLocationBox";
import FavoriteLocation from "../../components/FavoriteLocation/FavoriteLocation";
import { APP_STRUCTURE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& section:not(:last-child)": {
        marginBottom: theme.spacing(4)
      }
    },
    favorites: {
      display: "flex",
      flexWrap: "wrap",
      "& > div": {
        marginBottom: theme.spacing(3)
      },
      "& > div:not(:last-child)": {
        marginRight: theme.spacing(3)
      }
    }
  })
);

type Props = {
  launchLocation: string | null;
  favorites: string[];
};

const Favorites = ({ launchLocation, favorites }: Props) => {
  const classes = useStyles();
  // console.log("favorites");
  return (
    <>
      <AppHeader heading={APP_STRUCTURE.favorites} />
      <div className={classes.root}>
        <section>
          <Typography variant="h2">Launch Location</Typography>
          {launchLocation ? (
            <LaunchLocation location={launchLocation} />
          ) : (
            <AddLocationBox />
          )}
        </section>
        {favorites.length > 0 && (
          <section>
            <Typography variant="h2">Favorite Places</Typography>
            <div className={classes.favorites}>
              {favorites.map(location => (
                <FavoriteLocation key={location} location={location} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Favorites;
