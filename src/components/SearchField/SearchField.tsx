import React from "react";
import { TSetString, TInput } from "../../types";

type InputProps = {
  value: string;
  onBlur?: () => void;
};
type Props = {
  setSearchQuery: TSetString;
} & InputProps;

const SearchField = React.forwardRef<TInput, Props>(
  ({ value, setSearchQuery, onBlur }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.currentTarget.value;
      setSearchQuery(query);
    };

    return (
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder="Search"
        type="search"
        onBlur={onBlur}
      />
    );
  }
);

export default SearchField;
