import React from "react";
// import styles from "./Forecast.module.scss";

import Page from "../../components/Page/Page";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import useWeatherApi from "../../hooks/useWeatherApi";
import { ICurrentWeather, TSetStringOrNull } from "../../types";

type Props = {
  lastLocation: string;
  onSetLastLocation: TSetStringOrNull;
};

const Forecast = ({ lastLocation, onSetLastLocation }: Props) => {
  const [{ data: currentWeather, isLoading }] = useWeatherApi(lastLocation);

  return (
    <Page onSetLastLocation={onSetLastLocation}>
      <DataLoader
        error={`Requested city can't be found. Please, check if the name is correct,
        change service or try again later.`}
        isDataExist={!!currentWeather}
        isLoading={isLoading}
      >
        {currentWeather && (
          <CurrentWeather data={currentWeather as ICurrentWeather} />
        )}
      </DataLoader>
    </Page>
  );
};

export default Forecast;
