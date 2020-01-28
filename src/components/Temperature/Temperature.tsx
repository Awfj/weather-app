import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import useTemperature from "../../hooks/useTemperature";

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
    convertCelsiusToFahrenheit,
    convertFahrenheitToCelsius
  } = useTemperature();

  console.log(temperatureScale)
  return (
    <div>
      <p className={clsx(classes.root, className)}>
        {temperature}
        <span>&deg;{children}</span>
      </p>
      <div className={classes.scales}>
        <IconButton
          aria-label="Convert to celsius"
          color="inherit"
          onClick={() => convertFahrenheitToCelsius(temperature)}
        >
          C
        </IconButton>
        <IconButton
          aria-label="Convert to fahrenheit"
          color="inherit"
          onClick={() => convertCelsiusToFahrenheit(temperature)}
        >
          F
        </IconButton>
      </div>
    </div>
  );
};

export default Temperature;
