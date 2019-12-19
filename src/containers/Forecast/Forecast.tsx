import React from "react";

import Page from "../../components/Page/Page";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import Timer from "../../components/Timer/Timer";
import Toolbar from "../../components/Toolbar/Toolbar";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import Refresh from "../../components/Refresh/Refresh";
import Search from "../../components/Search/Search";

import useWeatherApi from "../../hooks/useWeatherApi";
import { TSetStringOrNull, TSetString } from "../../types";
import { getExpirationTimeframe } from "../../utils";

type Props = {
  lastLocation: string;
  setLastLocation: TSetStringOrNull;
  theme: string;
  setTheme: TSetString;
};

const Forecast = ({
  lastLocation,
  setLastLocation,
  theme,
  setTheme
}: Props) => {
  const [refreshIsDisabled, setRefreshIsDisabled] = React.useState(true);
  const [{ data, isLoading, isError }, getForecast] = useWeatherApi(
    lastLocation
  );
  // console.log(data && data.requestTime, isLoading, isError, lastLocation);

  return (
    <Page
      theme={theme}
      toolbar={
        <Toolbar
          refresh={
            <Refresh
              onClick={() => getForecast(lastLocation)}
              disabled={refreshIsDisabled}
            />
          }
          themeToggle={<ThemeToggle theme={theme} setTheme={setTheme} />}
        />
      }
      search={
        <Search
          theme={theme}
          setLastLocation={setLastLocation}
          lastLocation={lastLocation}
          getForecast={getForecast}
        />
      }
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
            Timer={
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
