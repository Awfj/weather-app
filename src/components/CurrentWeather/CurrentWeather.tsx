import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
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
      <div>
        <Temperature temperature={data.temperature}>C</Temperature>
        {/* <div className={classes.scales}>
              <IconButton aria-label="Convert to celsius" color="inherit">
                C
              </IconButton>
              <IconButton aria-label="Convert to fahrenheit" color="inherit">
                F
              </IconButton>
            </div> */}
      </div>
      <p>{data.condition}</p>
      {timer}
      <ul>
        {data.cloudiness && <li>Cloudiness: {data.cloudiness}%</li>}
        {data.windSpeed && <li>Wind: {data.windSpeed} m/s</li>}
        {data.visibility && <li>Visibility: {data.visibility} km</li>}
        {data.pressure && <li>Pressure: {data.pressure} mb</li>}
        {data.humidity && <li>Humidity: {data.humidity}%</li>}
      </ul>
    </section>
  );
};

export default CurrentWeather;
