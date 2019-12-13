import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.scss";
import { TSetStringOrNull, ITheme } from "../../types";

type Props = {
  setLastLocation: TSetStringOrNull;
  theme: ITheme;
};

const Search = ({ setLastLocation, theme }: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      setSearchQuery("");
      setLastLocation(query);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
  };

  return (
    <form
      style={{
        backgroundColor: theme.background.search
      }}
      className={styles.root}
      onSubmit={handleSubmit}
    >
      <input
        style={{
          color: theme.contrastText
        }}
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search"
        type="search"
      />
      <button
        style={{
          color: theme.contrastText
        }}
        aria-label="search"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
