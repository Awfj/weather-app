import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignSelf: "center",
      width: "25rem",
      "& > svg": {
        fontSize: "2rem",
        marginRight: theme.spacing(1)
      }
    },
    errorBorder: {
      padding: "1em",
      boxShadow: `0 0 0 1px ${theme.palette.primary.contrastText}`
    }
  })
);

export type ErrorProps = {
  errorStyles?: string;
  disableErrorBorder?: boolean;
};

type Props = {
  children: React.ReactNode;
} & ErrorProps;

const Error = ({
  children,
  errorStyles,
  disableErrorBorder = false
}: Props) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(
        classes.root,
        errorStyles,
        !disableErrorBorder && classes.errorBorder
      )}
    >
      <ErrorOutlineIcon />
      <p>{children}</p>
    </div>
  );
};

export default Error;
