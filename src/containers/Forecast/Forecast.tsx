import React from "react";

import Page, { PageProps } from "../../components/Page/Page";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import DataLoader from "../../components/DataLoader/DataLoader";
import Timer from "../../components/Timer/Timer";
import Toolbar from "../../components/ToolbarButtons/ToolbarButtons";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import Refresh from "../../components/RefreshButton/RefreshButton";
import Search from "../../components/Search/Search";

import useWeatherApi from "../../hooks/useWeatherApi";
import { TSetBoolean } from "../../types";
import { getExpirationTimeframe } from "../../utils";
import { APP_STRUCTURE } from "../../constants";

type Props = {
  lastLocation: string;
  isDarkTheme: boolean;
  setIsDarkTheme: TSetBoolean;
} & PageProps;

const Forecast = ({
  lastLocation,
  isDarkTheme,
  setIsDarkTheme,
  isDrawerOpen
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
    <Search lastLocation={lastLocation} getForecast={getForecast} />
  );

  return (
    <Page
      toolbarButtons={toolbarButtons}
      search={search}
      heading={APP_STRUCTURE.FORECAST}
      isDrawerOpen={isDrawerOpen}
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
