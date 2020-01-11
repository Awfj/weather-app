import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Temperature from "../../components/Temperature/Temperature";
import DataLoader from "../../components/DataLoader/DataLoader";
import useWeatherApi from "../../hooks/useWeatherApi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      border: "0.25rem solid transparent",
      color: theme.palette.secondary.contrastText,
      padding: theme.spacing(1),
      minHeight: "7.5rem",
      minWidth: "13rem",
      transition: 'all 0.1s ease-in-out',
      "&:hover": {
        border: "0.25rem solid white",
        outline: `0.15rem solid ${theme.palette.grey[500]}`
      }
    },
    group: {
      display: "flex",
      "& > p:first-child": {
        fontSize: "2.5rem",
        fontWeight: "lighter",
        paddingRight: theme.spacing(2.5),
        "& span": {
          fontSize: "0.4em",
          lineHeight: "2.6em"
        }
      }
    },
    spinner: {
      color: theme.palette.common.white,
      fontSize: "2.2rem"
    }
  })
);

type Props = {
  location: string;
};

const WeatherBox = ({ location }: Props) => {
  const classes = useStyles();
  const [{ data, isLoading, isError }] = useWeatherApi(location);

  const test = () => {
    console.log("test");
  };
  return (
    <section className={classes.root} onContextMenu={test}>
      {data && (
        <DataLoader
          spinnerStyles={classes.spinner}
          isLoading={isLoading}
          isError={isError}
          error={`Requested city can't be found. Please, check if the name is correct,
        change service or try again later.`}
        >
          <Typography variant="h3">
            {data.currentWeather.city}, {data.currentWeather.country}
          </Typography>
          <div className={classes.group}>
            <Temperature temperature={data.currentWeather.temperature}>
              C
            </Temperature>
          </div>
          <p>{data.currentWeather.condition}</p>
        </DataLoader>
      )}
    </section>
  );
};

export default WeatherBox;
