import React, { useContext } from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import Divider from "@material-ui/core/Divider";

import ListItemLink from "../ListItemLink/ListItemLink";
import {
  TOOLBAR_HEIGHT,
  toolbarHeightMin,
  drawerIconWidth,
  APP_STRUCTURE,
  listItemIconMinWidth
} from "../../constants";
import { capitalizeFirstChar } from "../../utils";
import { SettingsCtx } from "../../contexts";

const DRAWER_MIN_WIDTH = "8.5rem";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: DRAWER_MIN_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap",
      [theme.breakpoints.up("sm")]: {
        width: "13rem"
      },
      "& .MuiListItemIcon-root": {
        [theme.breakpoints.down("xs")]: {
          minWidth: `calc(${listItemIconMinWidth} - 0.5rem)`
        }
      },
      "& .MuiTypography-body1": {
        [theme.breakpoints.down("xs")]: {
          fontSize: "0.9rem"
        }
      }
    },
    isOpen: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      width: DRAWER_MIN_WIDTH,
      [theme.breakpoints.up("sm")]: {
        width: "13rem"
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
    list: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: `calc(100vh - ${toolbarHeightMin})`,
      [theme.breakpoints.up("sm")]: {
        height: `calc(100vh - ${TOOLBAR_HEIGHT})`
      }
    },
    paper: {
      top: toolbarHeightMin,
      [theme.breakpoints.up("sm")]: {
        top: TOOLBAR_HEIGHT
      }
    }
  })
);

const AppDrawer = () => {
  const classes = useStyles();
  const { isDrawerOpen } = useContext(SettingsCtx);

  return (
    <Drawer
      variant="permanent"
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
