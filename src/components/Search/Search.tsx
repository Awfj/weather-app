import React from "react";
import styles from "./Search.module.scss";
import { TSetStringOrNull, TGetForecast } from "../../types";
import { WindowWidthContext } from "../../contexts";
import { BREAKPOINTS } from "../../constants";
import SearchButton from "../SearchButton/SearchButton";
import SearchField from "./SearchField/SearchField";

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

  const handleBlur = () => setSearchIsShown(false);

  React.useEffect(() => {
    if (windowWidth && windowWidth < BREAKPOINTS.MD && searchFieldRef.current) {
      searchFieldRef.current.focus();
    }
  }, [searchIsShown, windowWidth]);

  const composeSearch = (onBlur?: () => void) => (
    <form className={styles.root} onSubmit={handleSubmit}>
      <SearchField
        ref={searchFieldRef}
        value={searchQuery}
        onBlur={onBlur}
        setSearchQuery={setSearchQuery}
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
