import React from "react";
import styles from "./Page.module.scss";
import useWindowWidth from "../../hooks/useWindowWidth";
import { WindowWidthContext } from "../../contexts";

import PageHeader, {
  PageHeaderProps
} from "../../components/PageHeader/PageHeader";

interface Props extends PageHeaderProps {
  children: React.ReactNode;
  theme: string;
}

const Page = ({ children, theme, ...other }: Props) => {
  const windowWidth = useWindowWidth();

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      <div className={`${styles.root} ${styles[theme]}`}>
        <PageHeader heading="Forecast" {...other} />
        <main>{children}</main>
      </div>
    </WindowWidthContext.Provider>
  );
};

export default Page;
