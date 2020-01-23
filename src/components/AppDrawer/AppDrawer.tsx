import React, { useEffect } from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import Divider from "@material-ui/core/Divider";

import ListItemLink from "../ListItemLink/ListItemLink";
import DrawerButton from "../DrawerButton/DrawerButton";
import useDrawer from "../../hooks/useDrawer";
import { LOCAL_STORAGE, SETTINGS } from "../../constants";

import {
  TOOLBAR_HEIGHT,
  toolbarHeightMin,
  drawerIconWidth,
  APP_STRUCTURE,
  listItemIconMinWidth
} from "../../constants";
import { capitalizeFirstChar } from "../../utils";

const DRAWER_WIDTH = "13rem";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap"
      // [theme.breakpoints.up("sm")]: {
      //   width: "13rem"
      // },
      // "& .MuiListItemIcon-root": {
      //   [theme.breakpoints.down("xs")]: {
      //     minWidth: `calc(${listItemIconMinWidth} - 0.5rem)`
      //   }
      // },
      // "& .MuiTypography-body1": {
      //   [theme.breakpoints.down("xs")]: {
      //     fontSize: "0.9rem"
      //   }
      // }
    },
    isOpen: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      width: DRAWER_WIDTH
      // [theme.breakpoints.up("sm")]: {
      //   width: "13rem"
      // }
    },
    isClosed: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: drawerIconWidth
    },
    toolbar: {
      display: "flex",
      justifyContent: "end"
    },
    list: {
      display: "flex",
      flexDirection: "column",
      height: `100vh`,
      [theme.breakpoints.up("sm")]: {
        height: `calc(100vh - ${TOOLBAR_HEIGHT})`,
        justifyContent: "space-between"
      }
    },
    paper: {
      top: 0,
      [theme.breakpoints.up("sm")]: {
        top: TOOLBAR_HEIGHT
      }
    }
  })
);

const AppDrawer = () => {
  const classes = useStyles();
  const {
    doesDrawerFit,
    isDrawerOpen,
    adjustDrawer,
    openDrawer,
    closeDrawer
  } = useDrawer();

  let drawerClose: (() => void) | undefined = closeDrawer;
  let drawerVariant: "temporary" | "permanent" = "temporary";
  if (doesDrawerFit) {
    drawerClose = undefined;
    drawerVariant = "permanent";
  }

  useEffect(() => {
    if (doesDrawerFit) {
      const storedState = localStorage.getItem(LOCAL_STORAGE.isDrawerOpen);
      if (storedState) {
        const isDrawerOpen: boolean = JSON.parse(storedState);
        adjustDrawer(isDrawerOpen);
      } else {
        localStorage.setItem(
          LOCAL_STORAGE.isDrawerOpen,
          String(SETTINGS.isDrawerOpen)
        );
        adjustDrawer(SETTINGS.isDrawerOpen);
      }
    } else closeDrawer();
  }, [adjustDrawer, openDrawer, closeDrawer, doesDrawerFit]);

  console.log("drawer");
  return (
    <Drawer
      onClick={drawerClose}
      variant={drawerVariant}
      open={isDrawerOpen}
      className={clsx(classes.root, {
        [classes.isOpen]: isDrawerOpen,
        [classes.isClosed]: !isDrawerOpen
      })}
      classes={{
        paper: clsx(classes.paper, {
          [classes.isOpen]: isDrawerOpen,
          [classes.isClosed]: !isDrawerOpen
        })
      }}
    >
      {!doesDrawerFit && (
        <>
          <div className={classes.toolbar}>
            <DrawerButton action="close" />
          </div>
          <Divider />
        </>
      )}
      <List disablePadding className={classes.list}>
        <div>
          <ListItemLink
            icon={<HomeOutlinedIcon />}
            primary={capitalizeFirstChar(APP_STRUCTURE.forecast)}
            to={APP_STRUCTURE.forecast}
          />
          <ListItemLink
            icon={<StarBorderIcon />}
            primary={capitalizeFirstChar(APP_STRUCTURE.favorites)}
            to={APP_STRUCTURE.favorites}
          />
        </div>
        <div>
          <Divider />
          <ListItemLink
            icon={<SettingsOutlinedIcon />}
            primary={capitalizeFirstChar(APP_STRUCTURE.settings)}
            to={APP_STRUCTURE.settings}
          />
        </div>
      </List>
    </Drawer>
  );
};

export default AppDrawer;
