import React from "react";
import Button, { ButtonProps } from "../Button/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

interface Props extends ButtonProps {}

const Refresh = ({ ...other }: Props) => {
  return (
    <Button label="Refresh" {...other}>
      <RefreshIcon />
    </Button>
  );
};

export default Refresh;
