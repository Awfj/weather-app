import React from "react";
import styles from "./Page.module.scss";

import PageHeader from "../../components/PageHeader/PageHeader";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import Refresh from "../../components/Refresh/Refresh";
import Search from "../../components/Search/Search";
import { THEMES } from "../../constants";
import { TSetStringOrNull, TGetForecast } from "../../types";

type Props = {
  children: React.ReactNode;
  setLastLocation: TSetStringOrNull;
  isThemeDynamic?: boolean;
  getForecast: TGetForecast;
  lastLocation: string;
  expirationTimeframe: number | null;
};

const Page = ({
  children,
  setLastLocation,
  lastLocation,
  getForecast,
  isThemeDynamic = false,
  expirationTimeframe
}: Props) => {
  const [theme, setTheme] = React.useState(THEMES.LIGHT);
  const dynamicTheme = isThemeDynamic ? THEMES.DYNAMIC : theme;

  const refresh = () => {
    getForecast(lastLocation);
  };
  return (
    <div className={`${styles.root} ${styles[dynamicTheme]}`}>
      <PageHeader
        heading="Forecast"
        theme={dynamicTheme}
        Refresh={
          expirationTimeframe && (
            <Refresh
              onClick={refresh}
              expirationTimeframe={expirationTimeframe}
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
      <main>{children}</main>
    </div>
  );
};

export default Page;
