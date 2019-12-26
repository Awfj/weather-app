import React from "react";
import styles from "./PageHeader.module.scss";
import { makeStyles } from "@material-ui/core/styles";

export type PageHeaderProps = {
  toolbar?: React.ReactNode;
  search: React.ReactNode;
};

type Props = {
  heading: string;
} & PageHeaderProps;

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  }
}));

const PageHeader = ({ heading, search, toolbar }: Props) => {
  const classes = useStyles();
  return (
    <header className={`${styles.root} ${classes.root}`}>
      <div className={styles.startGroup}>
        <h1>{heading}</h1>
      </div>
      {toolbar}
      {search}
    </header>
  );
};

export default PageHeader;
