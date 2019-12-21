import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button, { ButtonRef, ButtonProps } from "../Button/Button";

interface Props extends ButtonProps {
  label: string;
}

const SearchButton = React.forwardRef<ButtonRef, Props>(({ ...other }, ref) => {
  return (
    <Button ref={ref} {...other}>
      <SearchIcon />
    </Button>
  );
});

export default SearchButton;
