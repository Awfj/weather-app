import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.scss";
import Button from "../Button/Button";
import { TSetStringOrNull, TGetForecast } from "../../types";

type Props = {
  setLastLocation: TSetStringOrNull;
  getForecast: TGetForecast;
  lastLocation: string;
  theme: string;
};

const Search = ({
  setLastLocation,
  lastLocation,
  getForecast,
  theme
}: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      setSearchQuery("");
      if (query === lastLocation) {
        getForecast(query);
      } else {
        setLastLocation(query);
      }
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
      <Button label="search" type="submit">
        <SearchIcon />
      </Button>
    </form>
  );
};

export default Search;
