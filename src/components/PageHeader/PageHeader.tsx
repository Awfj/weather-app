import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DrawerToggle from "../DrawerToggle/DrawerToggle";

export type PageHeaderProps = {
  toolbar?: React.ReactNode;
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
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1
    },
    
  })
);

const PageHeader = ({ heading, search, toolbar, toggleDrawer }: Props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar disableGutters>
        <DrawerToggle onClick={toggleDrawer} />
        <Typography variant="h1" className={classes.title}>
          {heading}
        </Typography>
        {toolbar}
        {search}
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
