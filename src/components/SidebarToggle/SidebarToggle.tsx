import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

type Props = {
  className?: string;
} & typeof defaultProps;

const defaultProps = {
  label: "Expand sidebar"
};

const SidebarToggle = ({ label, ...other }: Props) => {
  const handleClick = () => {};

  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        color="inherit"
        onClick={handleClick}
        {...other}
      >
        <MenuIcon />
      </IconButton>
    </Tooltip>
  );
};

SidebarToggle.defaultProps = defaultProps;
export default SidebarToggle;
