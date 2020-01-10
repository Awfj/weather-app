import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import styles from "./Spinner.module.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.secondary.main,
      fontSize: "5.6rem",
      textIndent: "-9999em",
      overflow: "hidden",
      width: "1em",
      height: "1em",
      borderRadius: "50%",
      margin: "0.8em auto"
    }
  })
);

type Props = {
  className?: string;
};

const Spinner = ({ className }: Props) => {
  const classes = useStyles();
  return (
    <div className={clsx(styles.root, classes.root, className)}>Loading...</div>
  );
};

export default Spinner;
