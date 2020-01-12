import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Temperature from "../../components/Temperature/Temperature";
import DataLoader from "../../components/DataLoader/DataLoader";
import useWeatherApi from "../../hooks/useWeatherApi";
import { SettingsDispatchCtx } from "../../contexts";
import { APP_STRUCTURE } from "../../constants";
import { SET_LAST_LOCATION } from "../../actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > a:focus": {
        outline: "none"
      },
      "& > button, & > a": {
        border: `0.25rem solid ${theme.palette.secondary.main}`,
        transition: "all 0.1s ease-in-out",
        "&:focus": {
          boxShadow: `0 0 0 0.25rem ${theme.palette.text.primary}`
        },
        "&:hover": {
          outline: `0.25rem solid ${theme.palette.grey[500]}`
        }
      }
    },
    link: {
      marginRight: "0.25rem"
    },
    info: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      padding: theme.spacing(1),
      minHeight: "7.5rem",
      minWidth: "13rem"
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

export type WeatherBoxProps = {
  location: string;
};

type Props = {
  children: React.ReactNode;
} & WeatherBoxProps;

const WeatherBox = ({ location, children }: Props) => {
  const classes = useStyles();
  const [{ data, isLoading, isError }] = useWeatherApi(location);
  const dispatchSettings = useContext(SettingsDispatchCtx);

  const setLastLocation = () => {
    dispatchSettings({ type: SET_LAST_LOCATION, lastLocation: location });
  };

  return (
    <div className={classes.root}>
      <Link
        to={`${APP_STRUCTURE.forecast}`}
        onClick={setLastLocation}
        className={classes.link}
      >
        <section className={classes.info}>
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
      </Link>
      {children}
    </div>
  );
};

export default WeatherBox;
