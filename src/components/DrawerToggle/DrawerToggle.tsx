import React, { useContext } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { drawerIconWidth } from "../../constants";
import { TOGGLE_DRAWER } from "../../actions";
import { SettingsDispatchCtx } from "../../contexts";

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
      marginRight: theme.spacing(2),
      width: drawerIconWidth
    },
    button: {
      width: "100%"
    }
  })
);

const SidebarToggle = ({ label, ...other }: Props) => {
  const classes = useStyles();
  const dispatchSettings = useContext(SettingsDispatchCtx);

  const toggleDrawer = () => {
    dispatchSettings({ type: TOGGLE_DRAWER });
  };

  return (
    <div className={classes.root}>
      <IconButton
        aria-label={label}
        color="inherit"
        classes={{ root: classes.button }}
        onClick={toggleDrawer}
        {...other}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

SidebarToggle.defaultProps = defaultProps;
export default SidebarToggle;
