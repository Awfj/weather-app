import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Temperature from "../Temperature/Temperature";
import { ICurrentWeather } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // border: "1px solid #000",
      margin: "0 auto",
      textAlign: "center",
      maxWidth: "450px",
      "& p": {
        fontWeight: "lighter"
      },
      "& > div": {
        display: "flex",
        justifyContent: "center",
        "& > p": {
          fontSize: "5rem",
          lineHeight: "0.85em"
        },
        "& > p:first-child": {
          letterSpacing: "0px",
          // paddingRight: theme.spacing(2.5),
          paddingRight: theme.spacing(7.5),
          "& span": {
            fontSize: "0.7em",
            lineHeight: "0.9em"
          }
        }
      },
      "& > p": {
        fontSize: "1.5rem"
      },
      "& ul": {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: theme.spacing(1),
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
  timer: React.ReactNode;
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
      <ul>
        <li>Cloudiness: {data.cloudiness}%</li>
        <li>Wind: {data.windSpeed} m/s</li>
        <li>Visibility: {data.visibility} km</li>
        <li>Pressure: {data.pressure} mb</li>
        <li>Humidity: {data.humidity}%</li>
      </ul>

      {timer}
    </section>
  );
};

export default CurrentWeather;
