import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AppDrawer from "../../components/AppDrawer/AppDrawer";
import AppContent from "../../components/AppContent/AppContent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
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
