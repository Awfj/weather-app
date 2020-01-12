import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import WeatherBox, { WeatherBoxProps } from "../WeatherBox/WeatherBox";

type Props = {} & WeatherBoxProps & typeof defaultProps;

const defaultProps = {
  label: "Remove from Favorites"
};

const FavoritePlace = ({ label, ...other }: Props) => {
  return (
    <WeatherBox {...other}>
      <Tooltip title={label}>
        <IconButton aria-label={label} color="inherit">
          <ClearIcon />
        </IconButton>
      </Tooltip>
    </WeatherBox>
  );
};

FavoritePlace.defaultProps = defaultProps;
export default FavoritePlace;
