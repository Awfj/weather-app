import React, { useContext } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

import WeatherBox, { WeatherBoxProps } from "../WeatherBox/WeatherBox";
import { REMOVE_FROM_FAVORITES } from "../../actions";
import { SettingsDispatchCtx } from "../../contexts";

type Props = {} & WeatherBoxProps & typeof defaultProps;

const defaultProps = {
  label: "Remove from Favorites"
};

const FavoritePlace = ({ label, location }: Props) => {
  const dispatchSettings = useContext(SettingsDispatchCtx);

  const handleClick = () => {
    dispatchSettings({ type: REMOVE_FROM_FAVORITES, location });
  };

  return (
    <WeatherBox location={location}>
      <Tooltip title={label}>
        <IconButton aria-label={label} color="inherit" onClick={handleClick}>
          <ClearIcon />
        </IconButton>
      </Tooltip>
    </WeatherBox>
  );
};

FavoritePlace.defaultProps = defaultProps;
export default FavoritePlace;
