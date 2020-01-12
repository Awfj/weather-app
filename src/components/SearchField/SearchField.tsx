import React, { forwardRef } from "react";
import InputField, { InputFieldProps } from "../InputField/InputField";
import { TSetString, TInput, TChangeInput } from "../../types";

type Props = {
  setSearchQuery: TSetString;
} & InputFieldProps;

const SearchField = forwardRef<TInput, Props>(function SearchField(
  { setSearchQuery, ...other },
  ref
) {
  const handleChange: TChangeInput = event => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
  };

  return (
    <InputField
      ref={ref}
      type="search"
      placeholder="Search"
      onChange={handleChange}
      {...other}
    />
  );
});

export default SearchField;
