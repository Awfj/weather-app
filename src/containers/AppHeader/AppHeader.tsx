import React from "react";
import styles from "./AppHeader.module.scss";
import SearchIcon from "@material-ui/icons/Search";

type Props = {
  onGetWeather: (city: string) => void;
};

const AppHeader = ({ onGetWeather }: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      onGetWeather(query);
      setSearchQuery("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
  };

  return (
    <header className={styles.root}>
      <h1>Weather</h1>
      <div>
        <form onSubmit={handleSubmit}>
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
      </div>
    </header>
  );
};

export default AppHeader;
