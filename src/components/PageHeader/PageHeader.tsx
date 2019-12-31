import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DrawerToggle from "../DrawerToggle/DrawerToggle";
import { toolbarHeightMin } from "../../constants";

export type PageHeaderProps = {
  toolbarButtons?: React.ReactNode;
  search: React.ReactNode;
};

type Props = {
  heading: string;
  toggleDrawer: () => void;
} & PageHeaderProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      zIndex: theme.zIndex.drawer + 1
    },
    toolbar: {
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        minHeight: toolbarHeightMin
      }
    },
    title: {
      flexGrow: 1
    }
  })
);

const PageHeader = ({
  heading,
  search,
  toolbarButtons,
  toggleDrawer
}: Props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar
        disableGutters
        variant="dense"
        classes={{ root: classes.toolbar }}
      >
        <DrawerToggle onClick={toggleDrawer} />
        <Typography variant="h1" className={classes.title}>
          {heading}
        </Typography>
        {toolbarButtons}
        {search}
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
