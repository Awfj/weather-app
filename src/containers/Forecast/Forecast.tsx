import React from "react";
// import styles from "./Forecast.module.scss";

import Page from "../../components/Page/Page";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import useWeatherApi from "../../hooks/useWeatherApi";
import { TSetStringOrNull } from "../../types";

type Props = {
  lastLocation: string;
  setLastLocation: TSetStringOrNull;
};

const Forecast = ({ lastLocation, setLastLocation }: Props) => {
  const [{ data, isLoading, isError }, getForecast] = useWeatherApi(
    lastLocation
  );
  // console.log(data && data.currentWeather, isLoading, isError, lastLocation);
  return (
    <Page
      setLastLocation={setLastLocation}
      getForecast={getForecast}
      lastLocation={lastLocation}
      isThemeDynamic={true}
    >
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        error={`Requested city can't be found. Please, check if the name is correct,
        change service or try again later.`}
      >
        {data && <CurrentWeather data={data.currentWeather} />}
      </DataLoader>
    </Page>
  );
};

export default Forecast;
