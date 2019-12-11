import React from "react";
// import styles from "./Forecast.module.scss";

import Page from "../../components/Page/Page";
import PageHeader from "../../components/PageHeader/PageHeader";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import useWeatherApi from "../../hooks/useWeatherApi";
import { ICurrentWeather } from "../../types";

type Props = {
  lastLocation: string;
  onSetLastLocation: (value: React.SetStateAction<string | null>) => void;
};

const Forecast = ({ lastLocation, onSetLastLocation }: Props) => {
  const [{ data: currentWeather, isLoading }] = useWeatherApi(lastLocation);

  return (
    <Page
      header={
        <PageHeader
          onSetLastLocation={onSetLastLocation}
          title="Forecast"
          theme="dynamic"
        />
      }
      theme="dynamic"
    >
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
