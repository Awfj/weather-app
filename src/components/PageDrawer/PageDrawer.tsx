import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import {
  TOOLBAR_HEIGHT,
  toolbarHeightMin,
  drawerIconWidth
} from "../../constants";

type Props = {
  isDrawerOpen: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    isOpen: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      width: "13rem"
    },
    isClosed: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: drawerIconWidth
    },
    MuiPaper: {
      top: toolbarHeightMin,
      [theme.breakpoints.up("sm")]: {
        top: TOOLBAR_HEIGHT
      }
    }
  })
);

const PageDrawer = ({ isDrawerOpen }: Props) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      open={isDrawerOpen}
      className={clsx(classes.root, {
        [classes.isOpen]: isDrawerOpen,
        [classes.isClosed]: !isDrawerOpen
      })}
      classes={{
        paper: clsx(classes.MuiPaper, {
          [classes.isOpen]: isDrawerOpen,
          [classes.isClosed]: !isDrawerOpen
        })
      }}
    >
      <List disablePadding>
        {["Forecast", "Maps"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <HomeOutlinedIcon /> : <TrackChangesIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default PageDrawer;
