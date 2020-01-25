import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import DrawerButton from "../DrawerButton/DrawerButton";
import ToolbarButtons, {
  ToolbarButtonsProps
} from "../ToolbarButtons/ToolbarButtons";

import { toolbarHeightMin } from "../../constants";
import { capitalizeFirstChar } from "../../utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      zIndex: theme.zIndex.drawer + 1,
      "& h1": {
        [theme.breakpoints.up("sm")]: {
          fontSize: "2rem"
        }
      },
      "& .MuiIconButton-root": {
        [theme.breakpoints.up("sm")]: {
          fontSize: "1.5rem"
        }
      }
    },
    toolbar: {
      paddingRight: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        minHeight: toolbarHeightMin
      },
      [theme.breakpoints.up("sm")]: {
        paddingRight: theme.spacing(2)
      }
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(2)
      }
    }
  })
);

type Props = {
  search?: JSX.Element;
  heading?: string;
} & ToolbarButtonsProps;

const AppHeader = ({ heading, search, ...other }: Props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar
        disableGutters
        variant="dense"
        classes={{ root: classes.toolbar }}
      >
        <DrawerButton />
        <Typography variant="h1" className={classes.title}>
          {heading && capitalizeFirstChar(heading)}
        </Typography>
        {search}
        <ToolbarButtons {...other} />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
