import React from "react";
import styles from "./Page.module.scss";
import RefreshIcon from "@material-ui/icons/Refresh";
import Button from "../Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import Search from "../../components/Search/Search";
import { THEMES } from "../../constants";
import { TSetStringOrNull, TGetForecast } from "../../types";

type Props = {
  children: React.ReactNode;
  setLastLocation: TSetStringOrNull;
  isThemeDynamic?: boolean;
  getForecast: TGetForecast;
  lastLocation: string;
};

const Page = ({
  children,
  setLastLocation,
  lastLocation,
  getForecast,
  isThemeDynamic = false
}: Props) => {
  const [theme, setTheme] = React.useState(THEMES.LIGHT);

  const dynamicTheme = isThemeDynamic ? THEMES.DYNAMIC : theme;
  return (
    <div className={`${styles.root} ${styles[dynamicTheme]}`}>
      <PageHeader
        heading="Forecast"
        theme={dynamicTheme}
        Refresh={
          <Button label="Refresh" onClick={() => getForecast(lastLocation)}>
            <RefreshIcon />
          </Button>
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
