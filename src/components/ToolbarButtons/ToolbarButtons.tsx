import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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

export type ToolbarButtonsProps = {
  refresh?: JSX.Element;
  themeToggle?: JSX.Element;
};

type Props = {} & ToolbarButtonsProps;

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
