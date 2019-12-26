import React from "react";
import styles from "./Page.module.scss";
import useWindowWidth from "../../hooks/useWindowWidth";
import { WindowWidthContext } from "../../contexts";
import { makeStyles } from "@material-ui/core/styles";

import PageHeader, {
  PageHeaderProps
} from "../../components/PageHeader/PageHeader";

type Props = {
  children: React.ReactNode;
} & PageHeaderProps;

const useStyles = makeStyles(theme => ({
  root: {
    "& button": {
      "&:focus": {
        boxShadow: `0 0 0 2px ${theme.palette.secondary.dark}`
      },
      "&:active": {
        backgroundColor: theme.palette.secondary.dark,
        // color: theme.palette.secondary.contrastText
      }
    },
    "& main": {
      backgroundColor: theme.palette.background.default
    }
  }
}));

const Page = ({ children, ...other }: Props) => {
  const classes = useStyles();
  const windowWidth = useWindowWidth();

  // console.log("page");
  return (
    <WindowWidthContext.Provider value={windowWidth}>
      <div className={`${styles.root} ${classes.root}`}>
        <PageHeader heading="Forecast" {...other} />
        <main>{children}</main>
      </div>
    </WindowWidthContext.Provider>
  );
};

export default Page;
