import React from "react";
import styles from "./AppHeader.module.scss";
import SearchIcon from "@material-ui/icons/Search";

type Props = {
  onGetWeather: (city: string) => Promise<void>;
};

const AppHeader = ({ onGetWeather }: Props) => {
  const [searchValue, setSearchValue] = React.useState("paris");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onGetWeather(searchValue);
  };

  return (
    <header className={styles.root}>
      <h1>Weather</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={searchValue}
            onChange={event => setSearchValue(event.currentTarget.value)}
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
