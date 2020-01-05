import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";

type Props = {
  onClick: () => void;
  disabled: boolean;
} & typeof defaultProps;

const defaultProps = {
  label: "Refresh"
};

const Refresh = ({ label, ...other }: Props) => {
  return (
    <Tooltip title={label}>
      <span>
        <IconButton aria-label={label} color="inherit" {...other}>
          <RefreshIcon />
        </IconButton>
      </span>
    </Tooltip>
  );
};

Refresh.defaultProps = defaultProps;
export default Refresh;
