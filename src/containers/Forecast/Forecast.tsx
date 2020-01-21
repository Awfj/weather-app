import React, { useEffect } from "react";

import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import AppHeader from "../../components/AppHeader/AppHeader";
import DataLoader from "../../components/DataLoader/DataLoader";
import Favor, { FavorProps } from "../../components/Favor/Favor";
import Timer from "../../components/Timer/Timer";
import { getExpirationTimeframe } from "../../utils";
import useRefresh from "../../hooks/useRefresh";
import { State } from "../../reducers/reduceFetch";
import { APP_STRUCTURE } from "../../constants";
import { TGetData, IForecast } from "../../types";
import { capitalizeFirstChar } from "../../utils";

type Props = {
  getForecast: TGetData;
  forecast: State<IForecast>;
  search: JSX.Element;
} & FavorProps;

const Forecast = ({ lastLocation, search, forecast, getForecast }: Props) => {
  const { data, isLoading, isError } = forecast;
  const [setRefreshIsDisabled, refresh] = useRefresh(!!data, () =>
    getForecast(lastLocation)
  );
  const favor = data ? <Favor lastLocation={lastLocation} /> : undefined;

  useEffect(() => {
    getForecast(lastLocation);
  }, [getForecast, lastLocation]);

  // console.log("forecast");
  return (
    <>
      <AppHeader
        heading={APP_STRUCTURE.forecast}
        refresh={refresh}
        favor={favor}
        search={search}
      />
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        errorMessage={`We couldn't find ${capitalizeFirstChar(
          lastLocation
        )}. Please, check if the name is correct or try again later.`}
      >
        {data && (
          <CurrentWeather
            data={data.currentWeather}
            timer={
              <Timer
                expirationTimeframe={getExpirationTimeframe(data.requestTime)}
                setRefreshIsDisabled={setRefreshIsDisabled}
                requestTime={data.requestTime}
              />
            }
          />
        )}
      </DataLoader>
    </>
  );
};

export default Forecast;
