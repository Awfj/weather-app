import React from "react";
import { TSetString } from "../../../types";

type Props = {
  searchQuery: string;
  setSearchQuery: TSetString;
  autoFocus?: boolean;
};

const SearchField = ({ searchQuery, setSearchQuery, autoFocus }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
  };

  return (
    <input
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search"
      type="search"
      autoFocus={autoFocus}
    />
  );
};

export default SearchField;
