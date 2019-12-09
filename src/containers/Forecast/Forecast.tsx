import React from "react";
// import styles from "./Forecast.module.scss";

import Page from "../../components/Page/Page";
import PageHeader from "../../components/Page/PageHeader/PageHeader";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import useWeatherApi from "../../hooks/useWeatherApi";

type Props = {
  lastLocation: string;
  onSetLastLocation: (value: React.SetStateAction<string | null>) => void;
};

const Forecast = ({ lastLocation, onSetLastLocation }: Props) => {
  const [{ currentWeather, isLoading }, getWeather] = useWeatherApi(
    lastLocation
  );

  // React.useEffect(() => {
  //   console.log(currentWeather, isLoading);
  // });
  return (
    <Page
      header={
        <PageHeader onGetData={getWeather} title="Forecast" theme="dynamic" />
      }
      theme="dynamic"
    >
      <DataLoader
        error={`Requested city can't be found. Please, check if the name is correct,
        change service or try again later.`}
        isDataExist={!!currentWeather}
        isLoading={isLoading}
      >
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </DataLoader>
    </Page>
  );
};

export default Forecast;
