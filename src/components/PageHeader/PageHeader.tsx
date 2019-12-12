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
        <div>
          <h1>{heading}</h1>
        </div>
        <div>
          {ThemeToggle} {Search}
        </div>
      </header>
    );
  }
);

export default PageHeader;
