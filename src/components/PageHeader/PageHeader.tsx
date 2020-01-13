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
  heading?: string;
} & ToolbarButtonsProps;

type Props = {} & PageHeaderProps;

const PageHeader = ({ heading, search, ...other }: Props) => {
  const classes = useStyles();
  console.log(heading);
  return (
    <AppBar className={classes.root}>
      <Toolbar
        disableGutters
        variant="dense"
        classes={{ root: classes.toolbar }}
      >
        <DrawerToggle />
        <Typography variant="h1" className={classes.title}>
          {heading && capitalizeFirstChar(heading)}
        </Typography>
        {search}
        <ToolbarButtons {...other} />
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
