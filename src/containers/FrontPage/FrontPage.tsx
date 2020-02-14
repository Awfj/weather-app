import React from "react";
import Welcome, { WelcomeProps } from "../../containers/Welcome/Welcome";
import Forecast from "../../containers/Forecast/Forecast";
import Search, { SearchProps } from "../../components/Search/Search";
import useWeatherApi from "../../hooks/useWeatherApi";
import useTemperature from "../../hooks/useTemperature";

type Props = {} & WelcomeProps & SearchProps;

const FrontPage = (props: Props) => {
  const { lastLocation, ...other } = props;
  const [forecast, getForecast] = useWeatherApi();
  const { measurementUnits } = useTemperature();

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
