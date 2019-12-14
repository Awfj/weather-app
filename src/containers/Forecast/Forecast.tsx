import React from "react";
// import styles from "./Forecast.module.scss";

import Page from "../../components/Page/Page";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import useWeatherApi from "../../hooks/useWeatherApi";
// import { getLastLocation } from "../../utils";

type Props = {
  launchLocation: string;
};

const Forecast = ({ launchLocation }: Props) => {
  // const location = getLastLocation(launchLocation)
  const [
    { data: currentWeather, isLoading, isError },
    getWeather
  ] = useWeatherApi(launchLocation);
  console.log(currentWeather, isLoading, isError);

  return (
    <Page getData={getWeather}>
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        error={`Requested city can't be found. Please, check if the name is correct,
        change service or try again later.`}
      >
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </DataLoader>
    </Page>
  );
};

export default Forecast;
