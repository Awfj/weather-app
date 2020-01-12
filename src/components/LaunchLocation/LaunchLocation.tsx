import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

import WeatherBox, { WeatherBoxProps } from "../WeatherBox/WeatherBox";
import { APP_STRUCTURE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      fontSize: "1.5rem",
      padding: "0.5em",
      display: "flex",
      alignItems: "center",
      color: theme.palette.text.primary
    }
  })
);

type Props = {} & WeatherBoxProps;

const LaunchLocation = ({ ...other }: Props) => {
  const classes = useStyles();
  return (
    <WeatherBox {...other}>
      <Tooltip title="Change Launch Location">
        <Link to={`${APP_STRUCTURE.settings}`} className={classes.link}>
          <EditIcon />
        </Link>
      </Tooltip>
    </WeatherBox>
  );
};

export default LaunchLocation;
