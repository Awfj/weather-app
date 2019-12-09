import React from "react";
// import styles from "./Forecast.module.scss";

import Page from "../../components/Page/Page";
import PageHeader from "../../components/Page/PageHeader/PageHeader";
import CurrentWeather from './CurrentWeather/CurrentWeather'
import useWeatherApi from "../../hooks/useWeatherApi";

const Forecast = () => {
  const [
    { currentWeather, errorMessage, isLoading },
    getWeather
  ] = useWeatherApi();

  // React.useEffect(() => {
  //   console.log(currentWeather, errorMessage, isLoading);
  // });
  return (
    <Page
      header={
        <PageHeader onGetData={getWeather} title="Forecast" theme="dynamic" />
      }
      theme="dynamic"
    >
      {isLoading && <p>Loading...</p>}
      {currentWeather && !errorMessage ? (
        <CurrentWeather data={currentWeather} />
      ) : (
        <p>{errorMessage}</p>
      )}
    </Page>
  );
};

export default Forecast;
