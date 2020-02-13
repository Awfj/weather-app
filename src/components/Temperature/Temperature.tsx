import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import useTemperature from "../../hooks/useTemperature";
import { TTemperatureScale } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: "lighter",
      // position: "relative",
      letterSpacing: "0px",
      fontSize: "5rem",
      // paddingRight: theme.spacing(7.5),
      lineHeight: "0.85em"
      // "& span": {
      //   position: "absolute",
      //   top: "0",
      //   right: "0",
      //   fontSize: "0.7em",
      //   lineHeight: "0.9em"
      // }
    },
    scales: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "1em",
      "& button": {
        border: "1px solid orange",
        fontSize: "1.2rem",
        padding: "0.3em"
      }
    },
    active: {
      backgroundColor: "orange"
    }
  })
);

type Props = {
  children?: React.ReactNode;
  className?: string;
  temperature: number;
};

const Temperature = ({ children, className, temperature }: Props) => {
  const classes = useStyles();
  const {
    temperatureScale,
    temperatureScales,
    convertTemperatureScale
  } = useTemperature();

  const handleClick = (currentTemperatureScale: TTemperatureScale) => {
    if (temperatureScale !== currentTemperatureScale)
      convertTemperatureScale(temperature);
  };

  return (
    <div>
      <p className={clsx(classes.root, className)}>
        {temperature}
        <span>&deg;{children}</span>
      </p>
      <div className={classes.scales}>
        {temperatureScales.map(temperatureScale => (
          <IconButton
            key={temperatureScale}
            aria-label={`Convert to ${temperatureScale}`}
            color="inherit"
            onClick={() => handleClick(temperatureScale)}
          >
            {temperatureScale[0].toUpperCase()}
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default Temperature;
