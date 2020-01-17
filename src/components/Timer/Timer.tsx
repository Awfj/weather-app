import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getRemainingTime, getReadableRequestTime } from "../../utils";
import { TSetBoolean } from "../../types";
import useTimer from "../../hooks/useTimer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: "0.9rem",
      marginBottom: theme.spacing(1.5),
      "&": {
        fontWeight: "500"
      }
    }
  })
);

type Props = {
  expirationTimeframe: number;
  setRefreshIsDisabled: TSetBoolean;
  requestTime: number;
};

const Timer = ({
  expirationTimeframe,
  setRefreshIsDisabled,
  requestTime
}: Props) => {
  const classes = useStyles();
  const timer = useTimer(expirationTimeframe, setRefreshIsDisabled);

  return (
    <p className={classes.root}>
      Updated as of {getReadableRequestTime(requestTime)}. Refresh{" "}
      {timer >= 1000
        ? `will be available in: ${getRemainingTime(timer)}`
        : "is available!"}
    </p>
  );
};

export default Timer;
