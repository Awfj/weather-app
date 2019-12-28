import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SidebarToggle from "../SidebarToggle/SidebarToggle";

export type PageHeaderProps = {
  toolbar?: React.ReactNode;
  search: React.ReactNode;
};

type Props = {
  heading: string;
} & PageHeaderProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    sidebarButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const PageHeader = ({ heading, search, toolbar }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <SidebarToggle className={classes.sidebarButton} />
          <Typography variant="h1" className={classes.title}>
            {heading}
          </Typography>
          {toolbar}
          {search}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PageHeader;
