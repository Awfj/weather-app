import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import DrawerToggle from "../DrawerToggle/DrawerToggle";
import ToolbarButtons, {
  ToolbarButtonsProps
} from "../../components/ToolbarButtons/ToolbarButtons";

import { toolbarHeightMin } from "../../constants";
import { capitalizeFirstChar } from "../../utils";

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

export type PageHeaderProps = {
  search?: JSX.Element;
} & ToolbarButtonsProps;

type Props = {
  heading: string;
} & PageHeaderProps;

const PageHeader = ({ heading, refresh, search }: Props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar
        disableGutters
        variant="dense"
        classes={{ root: classes.toolbar }}
      >
        <DrawerToggle />
        <Typography variant="h1" className={classes.title}>
          {capitalizeFirstChar(heading)}
        </Typography>
        <ToolbarButtons refresh={refresh} />
        {search}
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
