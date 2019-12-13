import React from "react";
// import styles from "./Forecast.module.scss";

import Page from "../../components/Page/Page";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import useWeatherApi from "../../hooks/useWeatherApi";
import { ICurrentWeather, TSetStringOrNull } from "../../types";

type Props = {
  lastLocation: string;
  setLastLocation: TSetStringOrNull;
};

const Forecast = ({ lastLocation, setLastLocation }: Props) => {
  const [
    currentWeather,
    setCurrentWeather
  ] = React.useState<ICurrentWeather | null>(null);
  // const [{ data, isLoading }] = useWeatherApi(lastLocation);
  console.log("forecast", currentWeather);

  return (
    <Page setLastLocation={setLastLocation}>
      <DataLoader
        lastLocation={lastLocation}
        setData={setCurrentWeather}
        dataHook={useWeatherApi}
        error={`Requested city can't be found. Please, check if the name is correct,
        change service or try again later.`}
        // isDataExist={!!currentWeather}
        // isLoading={isLoading}
      >
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </DataLoader>
    </Page>
  );
};

export default Forecast;
