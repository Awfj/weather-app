import React from "react";

import Page from "../../components/Page/Page";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import Timer from "../../components/Timer/Timer";
import Toolbar from "../../components/ToolbarButtons/ToolbarButtons";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import Refresh from "../../components/RefreshButton/RefreshButton";
import Search from "../../components/Search/Search";

import useWeatherApi from "../../hooks/useWeatherApi";
import { TSetStringOrNull, TSetBoolean } from "../../types";
import { getExpirationTimeframe } from "../../utils";

type Props = {
  lastLocation: string;
  setLastLocation: TSetStringOrNull;
  isDarkTheme: boolean;
  setIsDarkTheme: TSetBoolean;
};

const Forecast = ({
  lastLocation,
  setLastLocation,
  isDarkTheme,
  setIsDarkTheme
}: Props) => {
  const [refreshIsDisabled, setRefreshIsDisabled] = React.useState(true);
  const [{ data, isLoading, isError }, getForecast] = useWeatherApi(
    lastLocation
  );
  // console.log(data && data.requestTime, isLoading, isError, lastLocation);

  const refresh = (
    <Refresh
      onClick={() => getForecast(lastLocation)}
      disabled={refreshIsDisabled}
    />
  );
  const themeToggle = (
    <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
  );
  const toolbarButtons = (
    <Toolbar refresh={refresh} themeToggle={themeToggle} />
  );
  const search = (
    <Search
      setLastLocation={setLastLocation}
      lastLocation={lastLocation}
      getForecast={getForecast}
    />
  );

  return (
    <Page toolbarButtons={toolbarButtons} search={search}>
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
