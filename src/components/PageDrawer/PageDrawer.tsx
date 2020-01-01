import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import ListItemLink from "../ListItemLink/ListItemLink";
import {
  TOOLBAR_HEIGHT,
  toolbarHeightMin,
  drawerIconWidth,
  APP_STRUCTURE
} from "../../constants";
import { capitalizeFirstChar } from "../../utils";

type Props = {
  isDrawerOpen: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "13rem",
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
    icon: {
      color: theme.palette.primary.contrastText
    },
    paper: {
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
        paper: clsx(classes.paper, {
          [classes.isOpen]: isDrawerOpen,
          [classes.isClosed]: !isDrawerOpen
        })
      }}
    >
      <List disablePadding>
        <ListItemLink
          icon={<HomeOutlinedIcon />}
          primary={capitalizeFirstChar(APP_STRUCTURE.FORECAST)}
          to={APP_STRUCTURE.FORECAST}
        />
        <ListItemLink
          icon={<StarBorderIcon />}
          primary={capitalizeFirstChar(APP_STRUCTURE.FAVORITES)}
          to={APP_STRUCTURE.FAVORITES}
        />
        {/* {["Forecast", "Maps"].map((text, index) => (
          // <ListItem button key={text}>
          //   <ListItemIcon classes={{ root: classes.icon }}>
          //     {index % 2 === 0 ? <HomeOutlinedIcon /> : <TrackChangesIcon />}
          //   </ListItemIcon>
          //   <ListItemText primary={text} />
          // </ListItem>
        ))} */}
      </List>
    </Drawer>
  );
};

export default PageDrawer;
