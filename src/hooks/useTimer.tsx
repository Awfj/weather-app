import { useState, useEffect } from "react";
import { TSetBoolean } from "../types";

const useTimer = (
  expirationTimeframe: number,
  setRefreshIsDisabled: TSetBoolean
) => {
  const [timer, setTimer] = useState(expirationTimeframe);

  useEffect(() => {
    if (expirationTimeframe >= 1000) {
      setTimer(expirationTimeframe);
      setRefreshIsDisabled(true);
    }
  }, [expirationTimeframe, setRefreshIsDisabled]);

  useEffect(() => {
    const timerTimeout = setTimeout(() => {
      if (timer >= 1000) {
        setTimer(timer => timer - 1000);
      } else {
        setRefreshIsDisabled(false);
      }
    }, 1000);
    return () => clearTimeout(timerTimeout);
  }, [timer, setRefreshIsDisabled]);

  return timer;
};

export default useTimer;
