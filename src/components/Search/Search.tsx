import React from "react";
import { TSetStringOrNull, TGetForecast } from "../../types";
import { WindowWidthContext } from "../../contexts";
import { BREAKPOINTS } from "../../constants";
import SearchButton from "./SearchButton/SearchButton";
import SearchField from "./SearchField/SearchField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

type Props = {
  setLastLocation: TSetStringOrNull;
  getForecast: TGetForecast;
  lastLocation: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      marginLeft: "0.5em",
      position: "absolute",
      top: "10px",
      right: "15px",
      zIndex: 1,
      [theme.breakpoints.up("md")]: {
        position: "static",
        zIndex: "auto"
      },
      "& input": {
        backgroundColor: "transparent",
        border: "none",
        fontSize: "0.9rem",
        padding: "0.8em",
        width: "100%"
      },
      "& button": {
        marginLeft: "6px",
        padding: "0.3em"
      },
      "& svg": {
        display: "block"
      }
    }
  })
);

const Search = ({ setLastLocation, lastLocation, getForecast }: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchIsShown, setSearchIsShown] = React.useState(false);
  const windowWidth = React.useContext(WindowWidthContext);
  const showSearchBtn = React.useRef<HTMLButtonElement | null>(null);
  const searchFieldRef = React.useRef<HTMLInputElement | null>(null);
  const classes = useStyles();

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
    <form className={classes.root} onSubmit={handleSubmit}>
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
