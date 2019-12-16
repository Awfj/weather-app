import React from "react";
import Search from "../../components/Search/Search";
import { TGetWeather } from "../../types";
import Button from "../Button/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

import styles from "./PageHeader.module.scss";

type Props = {
  heading: string;
  theme: string;
  ThemeToggle: React.ReactNode;
  getWeather: TGetWeather;
};

const PageHeader = React.memo(
  ({ heading, theme, ThemeToggle, getWeather }: Props) => {
    return (
      <header className={`${styles.root} ${styles[theme]}`}>
        <div className={styles.startGroup}>
          <h1>{heading}</h1>
        </div>
        <div className={styles.middleGroup}>
          {/* <Button label='Refresh' onClick={() => getWeather()}>
            <RefreshIcon />
          </Button> */}
          {ThemeToggle}
        </div>
        <Search theme={theme} getWeather={getWeather} />
      </header>
    );
  }
);

export default PageHeader;
