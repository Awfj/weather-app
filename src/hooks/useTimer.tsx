import React from "react";
import { TSetBoolean } from "../types";

const useTimer = (
  expirationTimeframe: number,
  setRefreshIsDisabled: TSetBoolean
) => {
  const [timer, setTimer] = React.useState(expirationTimeframe);

  React.useEffect(() => {
    if (expirationTimeframe >= 1000) {
      console.log("test");
      setTimer(expirationTimeframe);
      setRefreshIsDisabled(true);
    }
  }, [expirationTimeframe, setRefreshIsDisabled]);

  React.useEffect(() => {
    const timerTimeout = setTimeout(() => {
      if (timer >= 1000) {
        setTimer(timer => timer - 1000);
        console.log("count");
      } else {
        setRefreshIsDisabled(false);
        console.log("end");
      }
      console.log("timer");
    }, 1000);
    return () => clearTimeout(timerTimeout);
  }, [timer, setRefreshIsDisabled]);

  console.log(expirationTimeframe, timer);
  return timer;
};

export default useTimer;
