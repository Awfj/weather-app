import React from "react";

import styles from "./PageHeader.module.scss";

type Props = {
  heading: string;
  theme: string;
  Search: React.ReactNode;
  ThemeToggle: React.ReactNode;
};

const PageHeader = React.memo(
  ({ heading, theme, Search, ThemeToggle }: Props) => {
    return (
      <header className={`${styles.root} ${styles[theme]}`}>
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
