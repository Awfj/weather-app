import React from "react";

import styles from "./PageHeader.module.scss";
import { ITheme } from "../../types";

type Props = {
  heading: string;
  theme: ITheme;
  Search: React.ReactNode;
  ThemeToggle: React.ReactNode;
};

const PageHeader = React.memo(
  ({ heading, theme, Search, ThemeToggle }: Props) => {
    return (
      <header
        style={{
          backgroundColor: theme.background.header,
          color: theme.contrastText
        }}
        className={styles.root}
      >
        <div className={styles.startGroup}>
          <h1>{heading}</h1>
        </div>
        <div className={styles.middleGroup}>{ThemeToggle}</div>
        {Search}
      </header>
    );
  }
);

export default PageHeader;
