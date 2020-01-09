import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      "& span": {
        position: "absolute",
        top: "0",
        right: "0"
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
