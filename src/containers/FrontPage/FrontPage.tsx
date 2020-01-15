import React from "react";
import Welcome, { WelcomeProps } from "../../containers/Welcome/Welcome";
import Forecast from "../../containers/Forecast/Forecast";
import Search, { SearchProps } from "../../components/Search/Search";
import useWeatherApi from "../../hooks/useWeatherApi";

type Props = {} & WelcomeProps & SearchProps;

const FrontPage = ({ lastLocation, ...other }: Props) => {
  const [forecast, getForecast] = useWeatherApi();

  const search = <Search lastLocation={lastLocation} getData={getForecast} />;

  // console.log("front");
  return lastLocation ? (
    <Forecast
      lastLocation={lastLocation}
      forecast={forecast}
      getForecast={getForecast}
      search={search}
    />
  ) : (
    <Welcome search={search} {...other} />
  );
};

export default FrontPage;
