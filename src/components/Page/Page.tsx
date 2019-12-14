import React from "react";
import styles from "./Page.module.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Search from "../../components/Search/Search";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import { themes } from "../../theme";
import { ITheme } from "../../types";

type Props = {
  children: React.ReactNode;
  getData: (location: string) => Promise<void>;
  isThemeDynamic?: boolean;
};

const Page = ({
  children,
  getData,
  isThemeDynamic = false
}: Props) => {
  const [theme, setTheme] = React.useState<ITheme>(themes.light);

  const dynamicTheme = isThemeDynamic ? themes.dynamic : theme;
  return (
    <div className={styles.root}>
      <PageHeader
        heading="Forecast"
        theme={dynamicTheme}
        ThemeToggle={<ThemeToggle theme={theme} onSetTheme={setTheme} />}
        Search={
          <Search theme={dynamicTheme} getData={getData} />
        }
      />
      <main
        style={{
          backgroundColor: dynamicTheme.background.body,
          color: dynamicTheme.contrastText
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Page;
