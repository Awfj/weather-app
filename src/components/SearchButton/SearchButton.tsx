import React, { forwardRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputButton, { InputButtonProps } from "../InputButton/InputButton";
import { TButton } from "../../types";

type Props = {} & InputButtonProps;

const SearchButton = forwardRef<TButton, Props>(function SearchButton(
  { ...other },
  ref
) {
  return (
    <InputButton ref={ref} {...other}>
      <SearchIcon />
    </InputButton>
  );
});

export default SearchButton;
