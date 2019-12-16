import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { removeExpiredWeather } from "../../utils";
import styles from "./Search.module.scss";
import { TSetStringOrNull } from "../../types";

type Props = {
  setLastLocation: TSetStringOrNull;
  theme: string;
};

const Search = ({ setLastLocation, theme }: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      setSearchQuery("");
      removeExpiredWeather(query);
      setLastLocation(query);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search"
        type="search"
      />
      <button aria-label="search">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
