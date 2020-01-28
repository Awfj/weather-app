import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Temperature from "../Temperature/Temperature";
import { ICurrentWeather } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "0 auto",
      textAlign: "center",
      maxWidth: "24rem",
      "& > div:first-of-type": {
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing(0.5)
      },
      "& > p:first-of-type": {
        fontWeight: "lighter",
        fontSize: "1.5rem",
        marginBottom: theme.spacing(0.5)
      },
      "& ul": {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& li:not(:last-child)": {
          marginRight: "1em"
        }
      }
    }
  })
);

type Props = {
  data: ICurrentWeather;
  timer: JSX.Element;
};

const CurrentWeather = ({ data, timer }: Props) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h2">
        {data.city}, {data.country}
      </Typography>
      <Temperature temperature={data.temperature}></Temperature>
      <p>{data.condition}</p>
      {timer}
      <ul>
        <li>Cloudiness: {data.cloudiness}%</li>
        <li>Wind: {data.windSpeed} m/s</li>
        <li>Pressure: {data.pressure} mb</li>
        <li>Humidity: {data.humidity}%</li>
      </ul>
    </section>
  );
};

export default CurrentWeather;
