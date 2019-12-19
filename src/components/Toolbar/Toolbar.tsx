import React from "react";
import styles from './Toolbar.module.scss'

type Props = {
  themeToggle: React.ReactNode;
  refresh: React.ReactNode;
};

const Toolbar = ({ refresh, themeToggle }: Props) => {
  return (
    <div className={styles.root}>
      {refresh}
      {themeToggle}
    </div>
  );
};

export default Toolbar;
