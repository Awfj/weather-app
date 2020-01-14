import React from "react";
import Welcome, { WelcomeProps } from "../../containers/Welcome/Welcome";
import Forecast from "../../containers/Forecast/Forecast";
import Search from "../../components/Search/Search";
import useWeatherApi from "../../hooks/useWeatherApi";

type Props = {
  lastLocation: string | null;
} & WelcomeProps;

const FrontPage = ({ lastLocation, ...other }: Props) => {
  const [state, getForecast] = useWeatherApi();

  const search = <Search lastLocation={lastLocation} getData={getForecast} />;
  
  console.log("front");
  return lastLocation ? (
    <Forecast
      lastLocation={lastLocation}
      forecast={state}
      getForecast={getForecast}
      search={search}
    />
  ) : (
    <Welcome search={search} {...other} />
  );
};

export default FrontPage;
