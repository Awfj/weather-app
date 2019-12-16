import React from "react";
import Button from "../Button/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

type Props = {
  onClick: () => void;
};

const Refresh = ({ onClick }: Props) => {
  return (
    <Button label="Refresh" onClick={onClick}>
      <RefreshIcon />
    </Button>
  );
};

export default Refresh;
