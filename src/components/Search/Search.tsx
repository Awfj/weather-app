import React from "react";
import styles from "./Search.module.scss";
import { TSetStringOrNull, TGetForecast } from "../../types";
import { WindowWidthContext } from "../../contexts";
import SearchButton from "../SearchButton/SearchButton";

type Props = {
  setLastLocation: TSetStringOrNull;
  getForecast: TGetForecast;
  lastLocation: string;
};

const Search = ({ setLastLocation, lastLocation, getForecast }: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchIsShown, setSearchIsShown] = React.useState(false);
  const windowWidth = React.useContext(WindowWidthContext);
  const showSearchBtn = React.useRef<HTMLButtonElement | null>(null);
  const searchFieldRef = React.useRef<HTMLInputElement | null>(null);

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
    if (windowWidth && windowWidth < 940) {
      setSearchIsShown(false);
      if (showSearchBtn.current) {
        showSearchBtn.current.focus();
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
  };

  const handleBlur = React.useCallback(() => {
    if (searchIsShown) {
      setSearchIsShown(false);
      if (showSearchBtn.current) {
        showSearchBtn.current.focus();
      }
    }
  }, [searchIsShown]);

  const showSearch = () => {
    setSearchIsShown(true);
  };

  const composeSearch = () => {
    return (
      <form className={styles.root} onSubmit={handleSubmit}>
        <input
          ref={searchFieldRef}
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search"
          type="search"
        />
        <SearchButton label="Search" type="submit" />
      </form>
    );
  };

  React.useEffect(() => {
    if (windowWidth && windowWidth < 940) {
      if (searchFieldRef.current) {
        searchFieldRef.current.focus();
        searchFieldRef.current.addEventListener("blur", handleBlur);
      }
    }
  }, [searchIsShown, handleBlur, windowWidth]);

  return (
    <>
      {windowWidth && windowWidth > 940 ? (
        composeSearch()
      ) : (
        <>
          {searchIsShown && composeSearch()}
          <SearchButton
            ref={showSearchBtn}
            label="Show search"
            onClick={showSearch}
          />
        </>
      )}
    </>
  );
};

export default Search;
