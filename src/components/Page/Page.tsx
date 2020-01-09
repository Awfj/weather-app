import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import PageHeader, { PageHeaderProps } from "../PageHeader/PageHeader";
import PageDrawer from "../PageDrawer/PageDrawer";

import useWindowWidth from "../../hooks/useWindowWidth";
import { WindowWidthCtx } from "../../contexts";
import { TOOLBAR_HEIGHT, toolbarHeightMin } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& button": {
        "&:focus": {
          backgroundColor: theme.palette.action.selected
        },
        "&:hover": {
          backgroundColor: theme.palette.action.hover
        },
        "&:active": {
          backgroundColor: theme.palette.action.active,
          color: theme.palette.primary.main
        }
      },
      "& main": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexGrow: 1,
        marginTop: toolbarHeightMin,
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
          marginTop: TOOLBAR_HEIGHT
        }
      },
      "& form": {
        boxShadow: `0 0 0 1px ${theme.palette.primary.contrastText}`,
        "& input": {
          color: theme.palette.primary.contrastText,
          "&:focus": {
            boxShadow: `0 0 0 .2rem ${theme.palette.action.active}`
          }
        }
      },
      "& h2": {
        marginBottom: theme.spacing(2)
      }
    }
  })
);

type Props = {
  children: React.ReactNode;
  className?: string;
  heading: string;
} & PageHeaderProps;

const Page = ({ children, className, ...other }: Props) => {
  const classes = useStyles();
  const windowWidth = useWindowWidth();

  // console.log("page");
  return (
    <WindowWidthCtx.Provider value={windowWidth}>
      <div className={clsx(classes.root, className)}>
        <PageHeader {...other} />
        <PageDrawer />
        <main>{children}</main>
      </div>
    </WindowWidthCtx.Provider>
  );
};

export default Page;
