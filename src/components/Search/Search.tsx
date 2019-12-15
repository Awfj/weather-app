import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.scss";
import { TGetWeather } from "../../types";

type Props = {
  getWeather: TGetWeather;
  theme: string;
};

const Search = ({ getWeather, theme }: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      setSearchQuery("");
      getWeather(query);
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
