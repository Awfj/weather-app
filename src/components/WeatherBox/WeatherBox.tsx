import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Temperature from "../../components/Temperature/Temperature";
import useFetch from "../../hooks/useFetch";
import { LOCAL_STORAGE } from "../../constants";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "../../actions";

import { IForecast } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      padding: theme.spacing(1),
      minHeight: "7rem",
      minWidth: "13rem",
      "& > div": {
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
      }
    }
  })
);

type Props = {
  location: string;
};

const WeatherBox = ({ location }: Props) => {
  const classes = useStyles();
  const [{ data, isLoading, isError }, dispatchFetch] = useFetch<IForecast>();

  React.useEffect(() => {
    let storedData = localStorage.getItem(
      `${LOCAL_STORAGE.weatherForecast}${location}`
    );
    if (!storedData) {
    } else {
      const data = JSON.parse(storedData);
      dispatchFetch({ type: FETCH_SUCCESS, data: data });
    }
  }, [location, dispatchFetch]);

  console.log(data, isLoading, isError);
  return (
    <section className={classes.root}>
      {data && (
        <>
          <Typography variant="h3">
            {data.currentWeather.city}, {data.currentWeather.country}
          </Typography>
          <div>
            <Temperature temperature={data.currentWeather.temperature}>
              C
            </Temperature>
          </div>
          <p>{data.currentWeather.condition}</p>
        </>
      )}
    </section>
  );
};

export default WeatherBox;
