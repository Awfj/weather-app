import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import {
  drawerIconWidth,
  toolbarHeightMin,
  INTERACTIVE_ACTIONS
} from "../../constants";
import useDrawer from "../../hooks/useDrawer";
import { capitalizeFirstChar } from "../../utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      alignSelf: "stretch",
      display: "flex",
      width: drawerIconWidth,
      minHeight: toolbarHeightMin
    },
    button: {
      width: "100%"
    }
  })
);

type Props = {
  className?: string;
  action?: "close" | "toggle";
};

const { toggle, close } = INTERACTIVE_ACTIONS;

const DrawerButton = ({ action = toggle, ...other }: Props) => {
  const classes = useStyles();
  const { toggleDrawer, closeDrawer } = useDrawer();

  let handleClick = toggleDrawer;
  let label = " Drawer";
  let icon = <MenuIcon />;

  switch (action) {
    case toggle: {
      label = capitalizeFirstChar(toggle) + label;
      break;
    }
    case close: {
      label = capitalizeFirstChar(close) + label;
      handleClick = closeDrawer;
      icon = <CloseIcon />;
      break;
    }
  }

  return (
    <div className={classes.root}>
      <Tooltip title={label}>
        <IconButton
          aria-label={label}
          color="inherit"
          classes={{ root: classes.button }}
          onClick={handleClick}
          {...other}
        >
          {icon}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DrawerButton;
