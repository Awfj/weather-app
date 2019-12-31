import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import { TButton } from "../../../types";
import IconButton from "@material-ui/core/IconButton";

type Props = {
  label: string;
  type?: "submit";
  onClick?: () => void;
};

const SearchButton = React.forwardRef<TButton, Props>(
  ({ label, ...other }, ref) => {
    return (
      <Tooltip title={label}>
        <IconButton aria-label={label} color="inherit" ref={ref} {...other}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
    );
  }
);

export default SearchButton;
