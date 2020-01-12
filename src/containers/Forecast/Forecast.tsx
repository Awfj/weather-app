import React from "react";

import Page from "../../components/Page/Page";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import Timer from "../../components/Timer/Timer";
import Search from "../../components/Search/Search";
import Favor from "../../components/Favor/Favor";
import useWeatherApi from "../../hooks/useWeatherApi";
import { getExpirationTimeframe } from "../../utils";
import { APP_STRUCTURE } from "../../constants";
import useRefresh from "../../hooks/useRefresh";

type Props = { lastLocation: string };

const Forecast = ({ lastLocation }: Props) => {
  const [{ data, isLoading, isError }, getForecast] = useWeatherApi(
    lastLocation
  );
  const [refresh, setRefreshIsDisabled] = useRefresh(() =>
    getForecast(lastLocation)
  );
  const search = <Search lastLocation={lastLocation} getData={getForecast} />;
  // const favor = <Favor />;

  // console.log(data && data.requestTime, isLoading, isError, lastLocation);
  return (
    <Page
      refresh={refresh}
      search={search}
      favor={<Favor />}
      heading={APP_STRUCTURE.forecast}
    >
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        error={`Requested city can't be found. Please, check if the name is correct,
        change service or try again later.`}
      >
        {data && (
          <CurrentWeather
            data={data.currentWeather}
            timer={
              <Timer
                expirationTimeframe={getExpirationTimeframe(data.requestTime)}
                setRefreshIsDisabled={setRefreshIsDisabled}
              />
            }
          />
        )}
      </DataLoader>
    </Page>
  );
};

export default Forecast;
