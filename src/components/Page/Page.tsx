import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import PageHeader, { PageHeaderProps } from "../PageHeader/PageHeader";
import PageDrawer from "../PageDrawer/PageDrawer";

import useWindowWidth from "../../hooks/useWindowWidth";
import { WindowWidth, SettingsDispatch } from "../../contexts";
import { TOOLBAR_HEIGHT, toolbarHeightMin } from "../../constants";
import { TOGGLE_DRAWER } from "../../actions";

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
        flexGrow: 1,
        marginTop: toolbarHeightMin,
        padding: theme.spacing(0, 3),
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
      }
    }
  })
);

export type PageProps = {
  isDrawerOpen: boolean;
};

type Props = {
  children: React.ReactNode;
  heading: string;
} & PageHeaderProps &
  PageProps;

const Page = ({ children, isDrawerOpen, heading, ...other }: Props) => {
  const classes = useStyles();
  const windowWidth = useWindowWidth();
  const dispatchSettings = useContext(SettingsDispatch);

  const toggleDrawer = () => {
    dispatchSettings({ type: TOGGLE_DRAWER });
    localStorage.setItem("is_drawer_open", JSON.stringify(!isDrawerOpen));
  };

  // console.log("page");
  return (
    <WindowWidth.Provider value={windowWidth}>
      <div className={classes.root}>
        <PageHeader heading={heading} toggleDrawer={toggleDrawer} {...other} />
        <PageDrawer isDrawerOpen={isDrawerOpen} />
        <main>{children}</main>
      </div>
    </WindowWidth.Provider>
  );
};

export default Page;
