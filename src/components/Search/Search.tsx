import React from "react";
import styles from "./Search.module.scss";
import { TSetStringOrNull, TGetForecast } from "../../types";
import { WindowWidthContext } from "../../contexts";
import { BREAKPOINTS } from "../../constants";
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
    if (windowWidth && windowWidth < BREAKPOINTS.MD && showSearchBtn.current) {
      setSearchIsShown(false);
      showSearchBtn.current.focus();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
  };

  const handleBlur = () => setSearchIsShown(false);

  React.useEffect(() => {
    if (windowWidth && windowWidth < BREAKPOINTS.MD && searchFieldRef.current) {
      searchFieldRef.current.focus();
    }
  }, [searchIsShown, windowWidth]);

  const composeSearch = (blur?: () => void) => (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input
        ref={searchFieldRef}
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search"
        type="search"
        onBlur={blur}
      />
      {windowWidth && windowWidth >= BREAKPOINTS.MD && (
        <SearchButton label="Search" type="submit" />
      )}
    </form>
  );

  return (
    <>
      {windowWidth && windowWidth >= BREAKPOINTS.MD ? (
        composeSearch()
      ) : (
        <>
          {searchIsShown && composeSearch(handleBlur)}
          <SearchButton
            ref={showSearchBtn}
            label="Show search"
            onClick={() => setSearchIsShown(true)}
          />
        </>
      )}
    </>
  );
};

export default Search;
