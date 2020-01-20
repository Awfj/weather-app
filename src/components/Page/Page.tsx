import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AppDrawer from "../../components/AppDrawer/AppDrawer";
import AppContent from "../../components/AppContent/AppContent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& h2": {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
          fontSize: "2rem"
        }
      },
      "& h3": {
        marginBottom: theme.spacing(1.5),
        [theme.breakpoints.up("sm")]: {
          fontSize: "1.5rem"
        }
      },
      "& button": {
        "&:focus": {
          backgroundColor: theme.palette.action.selected
        },
        "&:hover": {
          backgroundColor: theme.palette.action.hover
        },
        "&:active": {
          backgroundColor: theme.palette.action.active,
          color: theme.palette.primary.main
        }
      }
    }
  })
);

const Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppDrawer />
      <AppContent />
    </div>
  );
};

export default Page;
