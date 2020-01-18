import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > a:focus": {
        outline: "none"
      },
      "& > button, & > a": {
        border: `0.25rem solid ${theme.palette.secondary.main}`,
        transition: "all 0.1s ease-in-out",
        "&:focus": {
          boxShadow: `0 0 0 0.25rem ${theme.palette.text.primary}`
        },
        "&:hover": {
          outline: `0.25rem solid ${theme.palette.grey[500]}`
        }
      }
    },
    link: {
      display: "flex"
    },
    box: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      padding: theme.spacing(1),
      minHeight: "6.5rem",
      minWidth: "8rem",
      [theme.breakpoints.up("sm")]: {
        minHeight: "8.5rem",
        minWidth: "13rem"
      }
    }
  })
);

type Props = {
  className?: string;
  linkStyles?: string;
  boxStyles?: string;
  children: React.ReactNode;
  tooltip: string;
  to: string;
  extra?: React.ReactNode;
  onClick?: () => void;
};

const LinkBox = ({
  children,
  tooltip,
  linkStyles,
  boxStyles,
  to,
  extra,
  onClick
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tooltip title={tooltip}>
        <Link
          to={to}
          onClick={onClick}
          className={clsx(classes.link, linkStyles)}
        >
          <div className={clsx(classes.box, boxStyles)}>{children}</div>
        </Link>
      </Tooltip>
      {extra}
    </div>
  );
};

export default LinkBox;
