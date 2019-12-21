import React from "react";
import styles from "./Timer.module.scss";
// import { getRemainingTime } from "../../utils";
import { TSetBoolean } from "../../types";

type Props = {
  expirationTimeframe: number;
  setRefreshIsDisabled: TSetBoolean;
};

const Timer = ({ expirationTimeframe, setRefreshIsDisabled }: Props) => {
  // const [timer, setTimer] = React.useState(expirationTimeframe);

  // React.useEffect(() => {
  //   if (expirationTimeframe >= 1000) {
  //     console.log("test");
  //     setTimer(expirationTimeframe);
  //     setRefreshIsDisabled(true);
  //   }
  // }, [expirationTimeframe, setRefreshIsDisabled]);

  // React.useEffect(() => {
  //   const timerTimeout = setTimeout(() => {
  //     if (timer >= 1000) {
  //       setTimer(timer => timer - 1000);
  //       // console.log('count')
  //     } else {
  //       setRefreshIsDisabled(false);
  //       console.log("end");
  //     }
  //     console.log("timer");
  //   }, 1000);
  //   return () => clearTimeout(timerTimeout);
  // }, [timer, setRefreshIsDisabled]);

  // console.log(expirationTimeframe, timer);
  return (
    <div className={styles.root}>
      {/* <p>
        Refresh{" "}
        {timer >= 1000
          ? `will be available in: ${getRemainingTime(timer)}`
          : "is available!"}
      </p> */}
    </div>
  );
};

export default Timer;
