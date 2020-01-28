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
import { initialSettings } from "../../providers/SettingsProvider";

import {
  TOOLBAR_HEIGHT,
  drawerIconWidth,
  APP_STRUCTURE,
  listItemIconMinWidth,
  ACTIVE_LINK_BORDER_SIZE,
  LIST_ITEM_GUTTER_SIZE,
  LOCAL_STORAGE,
  DRAWER_BREAKPOINT
} from "../../constants";
import { capitalizeFirstChar } from "../../utils";

const DRAWER_WIDTH = "13rem";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap",
      "& .MuiListItemIcon-root": {
        [theme.breakpoints.down("xs")]: {
          minWidth: `calc(${listItemIconMinWidth} - 0.5rem)`
        }
      },
      "& .MuiListItem-gutters": {
        paddingLeft: `calc(${LIST_ITEM_GUTTER_SIZE} - ${ACTIVE_LINK_BORDER_SIZE})`,
        paddingRight: `calc(${LIST_ITEM_GUTTER_SIZE} + 2rem)`
      }
    },
    isOpen: {
      [theme.breakpoints.up(DRAWER_BREAKPOINT)]: {
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        }),
        width: DRAWER_WIDTH
      }
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
      justifyContent: "flex-end"
    },
    list: {
      [theme.breakpoints.up(DRAWER_BREAKPOINT)]: {
        height: `calc(100vh - ${TOOLBAR_HEIGHT})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }
    },
    paper: {
      top: TOOLBAR_HEIGHT
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

  useEffect(() => {
    if (doesDrawerFit) {
      const storedDrawer = localStorage.getItem(LOCAL_STORAGE.isDrawerOpen);
      if (storedDrawer) {
        adjustDrawer(JSON.parse(storedDrawer));
      } else {
        localStorage.setItem(
          LOCAL_STORAGE.isDrawerOpen,
          String(initialSettings.isDrawerOpen)
        );
        adjustDrawer(initialSettings.isDrawerOpen);
      }
    } else closeDrawer();
  }, [adjustDrawer, openDrawer, closeDrawer, doesDrawerFit]);

  let handleClose: (() => void) | undefined = closeDrawer;
  let drawerVariant: "temporary" | "permanent" = "temporary";
  if (doesDrawerFit) {
    handleClose = undefined;
    drawerVariant = "permanent";
  }

  let styledDrawer = clsx(classes.root, classes.isOpen);
  let styledPaper = classes.isOpen;
  if (doesDrawerFit) {
    styledDrawer = clsx(classes.root, {
      [classes.isOpen]: isDrawerOpen,
      [classes.isClosed]: !isDrawerOpen
    });
    styledPaper = clsx(classes.paper, {
      [classes.isOpen]: isDrawerOpen,
      [classes.isClosed]: !isDrawerOpen
    });
  }

  // console.log("drawer");
  return (
    <Drawer
      onClose={handleClose}
      variant={drawerVariant}
      open={isDrawerOpen}
      className={styledDrawer}
      classes={{
        paper: styledPaper
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
      <List disablePadding className={classes.list} onClick={handleClose}>
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
