import React from "react";
import styles from "./PageHeader.module.scss";

export type PageHeaderProps = {
  theme: string;
  toolbar?: React.ReactNode;
  search: React.ReactNode;
};

interface Props extends PageHeaderProps {
  heading: string;
}

const PageHeader = ({ heading, theme, search, toolbar }: Props) => {
  return (
    <header className={`${styles.root} ${styles[theme]}`}>
      <div className={styles.startGroup}>
        <h1>{heading}</h1>
      </div>
      <div className={styles.middleGroup}>{toolbar}</div>
      {search}
    </header>
  );
};

export default PageHeader;
