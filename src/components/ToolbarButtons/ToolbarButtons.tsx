import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-end",
      "& > *:not(:last-child)": {
        marginRight: theme.spacing(0.5)
      }
    }
  })
);

export type ToolbarButtonsProps = {
  refresh?: JSX.Element;
  favor?: JSX.Element;
};

type Props = {} & ToolbarButtonsProps;

const ToolbarButtons = ({ refresh, favor }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {refresh}
      {favor}
      <ThemeToggle />
    </div>
  );
};

export default ToolbarButtons;
