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
      "&:hover": {
        backgroundColor: theme.palette.action.hover
      },
      "&:focus": {
        boxShadow: `0 0 0 2px ${theme.palette.action.active}`
      },
      "&:active": {
        backgroundColor: theme.palette.action.active,
        color: theme.palette.primary.main
      }
    },
    "& main": {
      backgroundColor: theme.palette.background.default
    },
    "& form": {
      boxShadow: `0 0 0 1px ${theme.palette.primary.contrastText}`,
      "& input": {
        color: theme.palette.primary.contrastText
      },
      "& input, & button": {
        "&:focus": {
          boxShadow: `0 0 0 3px ${theme.palette.action.active}`
        }
      }
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
