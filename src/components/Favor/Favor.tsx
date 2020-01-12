import React, { useState, useEffect, useContext } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { SettingsDispatchCtx, SettingsCtx } from "../../contexts";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../../actions";

const Favor = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatchSettings = useContext(SettingsDispatchCtx);
  const { lastLocation, favorites } = useContext(SettingsCtx);

  const addToFavorites = () => {
    if (lastLocation) {
      dispatchSettings({ type: ADD_TO_FAVORITES, location: lastLocation });
    }
  };

  const removeFromFavorites = () => {
    if (lastLocation) {
      // dispatchSettings({ type: REMOVE_FROM_FAVORITES, id });
    }
  };

  useEffect(() => {
    if (lastLocation) {
      setIsFavorite(favorites.includes(lastLocation));
    }
  }, [favorites, lastLocation]);

  const label = isFavorite ? "Remove from Favorites" : "Add to Favorites";
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
