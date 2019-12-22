import React from "react";
import styles from "./PageHeader.module.scss";

export type PageHeaderProps = {
  toolbar?: React.ReactNode;
  search: React.ReactNode;
};

interface Props extends PageHeaderProps {
  heading: string;
}

const PageHeader = ({ heading, search, toolbar }: Props) => {
  return (
    <header className={styles.root}>
      <div className={styles.startGroup}>
        <h1>{heading}</h1>
      </div>
      {toolbar}
      {search}
    </header>
  );
};

export default PageHeader;
