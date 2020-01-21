import React, { useState, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../../actions";
import useSettings from "../../hooks/useSettings";

export type FavorProps = {
  lastLocation: string;
};

type Props = {} & FavorProps;

const Favor = ({ lastLocation }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [{ favorites }, dispatch] = useSettings();

  const addToFavorites = () => {
    dispatch({ type: ADD_TO_FAVORITES, location: lastLocation });
  };

  const removeFromFavorites = () => {
    dispatch({ type: REMOVE_FROM_FAVORITES, location: lastLocation });
  };

  useEffect(() => {
    setIsFavorite(favorites.includes(lastLocation));
  }, [favorites, lastLocation]);

  const label = isFavorite ? "Remove from Favorites" : "Add to Favorites";
  // console.log(lastLocation, favorites);
  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        color="inherit"
        onClick={isFavorite ? removeFromFavorites : addToFavorites}
      >
        {isFavorite ? <StarIcon /> : <StarBorderIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default Favor;
