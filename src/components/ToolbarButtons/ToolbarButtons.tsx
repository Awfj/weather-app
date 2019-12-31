import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

type Props = {
  themeToggle: React.ReactElement;
  refresh: React.ReactElement;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-end",
      "& > *": {
        marginRight: theme.spacing(0.5)
      }
    }
  })
);

const ToolbarButtons = ({ refresh, themeToggle }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {refresh}
      {themeToggle}
    </div>
  );
};

export default ToolbarButtons;
