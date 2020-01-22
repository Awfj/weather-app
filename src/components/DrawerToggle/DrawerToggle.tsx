import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { drawerIconWidth, LOCAL_STORAGE } from "../../constants";
import useDrawer from "../../hooks/useDrawer";

type Props = {
  className?: string;
} & typeof defaultProps;

const defaultProps = {
  label: "Toggle drawer"
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      alignSelf: "stretch",
      display: "flex",
      marginRight: theme.spacing(1),
      width: drawerIconWidth,
      [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(2)
      }
    },
    button: {
      width: "100%"
    }
  })
);

const DrawerToggle = ({ label, ...other }: Props) => {
  const classes = useStyles();
  const { doesDrawerFit, isDrawerOpen, toggleDrawer } = useDrawer();

  const handleClick = () => {
    toggleDrawer();
    if (doesDrawerFit) {
      localStorage.setItem(LOCAL_STORAGE.isDrawerOpen, String(!isDrawerOpen));
    }
  };
  // console.log('toggle')
  return (
    <div className={classes.root}>
      <IconButton
        aria-label={label}
        color="inherit"
        classes={{ root: classes.button }}
        onClick={handleClick}
        {...other}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

DrawerToggle.defaultProps = defaultProps;
export default DrawerToggle;
