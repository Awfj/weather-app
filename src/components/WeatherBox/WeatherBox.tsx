import React, { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Temperature from "../../components/Temperature/Temperature";
import DataLoader from "../../components/DataLoader/DataLoader";
import LinkBox from "../LinkBox/LinkBox";
import useWeatherApi from "../../hooks/useWeatherApi";
import { SettingsDispatchCtx } from "../../contexts";
import { APP_STRUCTURE } from "../../constants";
import { SET_LAST_LOCATION } from "../../actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      marginRight: "0.25rem"
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
    <LinkBox
      tooltip="Go to Forecast"
      to={`${APP_STRUCTURE.forecast}`}
      onClick={setLastLocation}
      linkStyles={classes.link}
      extra={children}
    >
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
    </LinkBox>
  );
};

export default WeatherBox;
