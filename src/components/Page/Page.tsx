import React from "react";
import styles from "./Page.module.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import { THEMES } from "../../constants";
import { TGetWeather } from "../../types";

type Props = {
  children: React.ReactNode;
  getWeather: TGetWeather;
  isThemeDynamic?: boolean;
};

const Page = ({ children, getWeather, isThemeDynamic = false }: Props) => {
  const [theme, setTheme] = React.useState(THEMES.LIGHT);

  const dynamicTheme = isThemeDynamic ? THEMES.DYNAMIC : theme;
  return (
    <div className={`${styles.root} ${styles[dynamicTheme]}`}>
      <PageHeader
        heading="Forecast"
        theme={dynamicTheme}
        getWeather={getWeather}
        ThemeToggle={<ThemeToggle theme={theme} setTheme={setTheme} />}
      />
      <main>{children}</main>
    </div>
  );
};

export default Page;
