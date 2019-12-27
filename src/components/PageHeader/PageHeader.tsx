import React from "react";
import styles from "./PageHeader.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export type PageHeaderProps = {
  toolbar?: React.ReactNode;
  search: React.ReactNode;
};

type Props = {
  heading: string;
} & PageHeaderProps;

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper
//   }
// }));

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
});

const PageHeader = ({ heading, search, toolbar }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <div className={classes.title}>
            <h1>{heading}</h1>
          </div>
          {toolbar}
          {search}
        </Toolbar>
      </AppBar>
    </div>
    // <header className={`${styles.root} ${classes.root}`}>
    // <div className={styles.startGroup}>
    //   <h1>{heading}</h1>
    // </div>
    // {toolbar}
    // {search}
    // </header>
  );
};

export default PageHeader;
