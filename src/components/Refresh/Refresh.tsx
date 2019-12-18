import React from "react";
import Button from "../Button/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

type Props = {
  onClick: () => void;
  isDisabled: boolean;
};

const Refresh = ({ onClick, isDisabled }: Props) => {
  return (
    <Button disabled={isDisabled} label="Refresh" onClick={onClick}>
      <RefreshIcon />
    </Button>
  );
};

export default Refresh;
