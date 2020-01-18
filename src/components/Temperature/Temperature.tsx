import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: "lighter",
      position: "relative",
      letterSpacing: "0px",
      // paddingRight: theme.spacing(2.5),
      paddingRight: theme.spacing(4.5),
      fontSize: "3rem",
      lineHeight: "0.85em",
      [theme.breakpoints.up("sm")]: {
        fontSize: "5rem",
        paddingRight: theme.spacing(7.5)
      },
      "& span": {
        position: "absolute",
        top: "0",
        right: "0",
        fontSize: "0.7em",
        lineHeight: "0.9em"
      }
    }
  })
);

type Props = {
  children?: React.ReactNode;
  className?: string;
  temperature: number;
};

const Temperature = ({ children, className, temperature }: Props) => {
  const classes = useStyles();

  return (
    <p className={clsx(classes.root, className)}>
      {temperature}
      <span>&deg;{children}</span>
    </p>
  );
};

export default Temperature;
