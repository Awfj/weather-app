import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TFormEvent } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      boxShadow: `0 0 0 1px ${theme.palette.primary.contrastText}`
    }
  })
);

type Props = {
  children: React.ReactNode;
  className?: string;
  onSubmit?: TFormEvent;
};

const Form = ({ children, className, onSubmit }: Props) => {
  const classes = useStyles();
  return (
    <form className={clsx(classes.root, className)} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
