import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button, { ButtonProps } from "../Button/Button";
import { TButton } from "../../types";

interface Props extends ButtonProps {
  label: string;
}

const SearchButton = React.forwardRef<TButton, Props>(({ ...other }, ref) => {
  return (
    <Button ref={ref} {...other}>
      <SearchIcon />
    </Button>
  );
});

export default SearchButton;
