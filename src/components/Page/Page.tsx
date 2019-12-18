import React from "react";
import styles from "./Page.module.scss";

import PageHeader from "../../components/PageHeader/PageHeader";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import Refresh from "../../components/Refresh/Refresh";
import Search from "../../components/Search/Search";
import Timer from "../../components/Timer/Timer";
import TimerToggle from "../../components/TimerToggle/TimerToggle";
import { THEMES, EXPIRATION_TIMEFRAME } from "../../constants";
import { TSetStringOrNull, TGetForecast } from "../../types";

type Props = {
  children: React.ReactNode;
  setLastLocation: TSetStringOrNull;
  isThemeDynamic?: boolean;
  getForecast: TGetForecast;
  lastLocation: string;
  requestTime?: number | null;
};

const Page = ({
  children,
  setLastLocation,
  lastLocation,
  getForecast,
  isThemeDynamic = false,
  requestTime
}: Props) => {
  const [theme, setTheme] = React.useState(THEMES.LIGHT);
  const [refreshIsDisabled, setRefreshIsDisabled] = React.useState(true);
  const dynamicTheme = isThemeDynamic ? THEMES.DYNAMIC : theme;
  const [timerIsShown, setTimerIsShown] = React.useState(true);

  return (
    <div className={`${styles.root} ${styles[dynamicTheme]}`}>
      <PageHeader
        heading="Forecast"
        theme={dynamicTheme}
        TimerToggle={
          <TimerToggle onClick={() => setTimerIsShown(!timerIsShown)} />
        }
        Refresh={
          requestTime && (
            <Refresh
              onClick={() => getForecast(lastLocation)}
              isDisabled={refreshIsDisabled}
            />
          )
        }
        Search={
          <Search
            theme={dynamicTheme}
            setLastLocation={setLastLocation}
            lastLocation={lastLocation}
            getForecast={getForecast}
          />
        }
        ThemeToggle={<ThemeToggle theme={theme} setTheme={setTheme} />}
      />
      <main>
        {requestTime && (
          <Timer
            expirationTimeframe={
              EXPIRATION_TIMEFRAME - (new Date().getTime() - requestTime)
            }
            setRefreshIsDisabled={setRefreshIsDisabled}
            timerIsShown={timerIsShown}
          />
        )}
        {children}
      </main>
    </div>
  );
};

export default Page;
