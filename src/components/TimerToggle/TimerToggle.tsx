import React from "react";
import Button from "../Button/Button";
import TimerIcon from "@material-ui/icons/Timer";
// import { TSetBoolean } from "../../types";

type Props = {
  // setTimerIsShown: TSetBoolean;
  // timerIsShown: boolean;
  onClick: () => void;
};

const TimerToggle = ({ onClick }: Props) => {
  // const handleClick = () => {
  //   setTimerIsShown(!timerIsShown);
  // };
  return (
    <Button label="Toggle timer" onClick={onClick}>
      <TimerIcon />
    </Button>
  );
};

export default TimerToggle;
