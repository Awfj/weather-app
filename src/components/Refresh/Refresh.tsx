import React from "react";
import Button from "../Button/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

type Props = {
  onClick: () => void;
  expirationTimeframe: number;
};

const Refresh = ({ onClick, expirationTimeframe }: Props) => {
  const [isDisabeld, setIsDisabeld] = React.useState(true);
  const [timer, setTimer] = React.useState(expirationTimeframe);

  // React.useEffect(() => {
  //   setTimer(expirationTimeframe);
  //   setIsDisabeld(true);
  //   console.log("test");
  // }, [expirationTimeframe]);

  // React.useEffect(() => {
  //   const timerTimeout = setTimeout(() => {
  //     // setIsDisabeld(false);
  //     if (timer > 0) {
  //       setTimer(timer => timer - 1000);
  //       // console.log('count')
  //     } else {
  //       // setTimer(0);
  //       setIsDisabeld(false);
  //       console.log("end");
  //     }
  //     console.log("timer");
  //   }, 1000);
  //   return () => clearTimeout(timerTimeout);
  // }, [timer]);

  // console.log(expirationTimeframe, timer);

  return (
    <Button disabled={isDisabeld} label="Refresh" onClick={onClick}>
      {/* <RefreshIcon /> */}
      {timer}
    </Button>
  );
};

export default Refresh;
