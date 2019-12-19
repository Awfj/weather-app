import React from "react";
import styles from "./Page.module.scss";

import PageHeader, {
  PageHeaderProps
} from "../../components/PageHeader/PageHeader";

interface Props extends PageHeaderProps {
  children: React.ReactNode;
}

const Page = ({ children, theme, ...other }: Props) => {
  return (
    <div className={`${styles.root} ${styles[theme]}`}>
      <PageHeader heading="Forecast" theme={theme} {...other} />
      <main>{children}</main>
    </div>
  );
};

export default Page;
