import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  FormEvent
} from "react";
import { TGetForecast } from "../../types";
import { WindowWidth, SettingsDispatch } from "../../contexts";
import SearchButton from "../SearchButton/SearchButton";
import SearchField from "../SearchField/SearchField";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from "@material-ui/core/styles";
import { ICON_BUTTON_FONT_SIZE } from "../../constants";
import { SET_LAST_LOCATION } from "../../actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "15px",
      zIndex: 1,
      [theme.breakpoints.up("md")]: {
        position: "static",
        marginLeft: theme.spacing(1.5),
        transform: "none",
        zIndex: "auto"
      },
      "& input": {
        backgroundColor: "transparent",
        border: "none",
        fontSize: "0.9rem",
        padding: "1em 0.8em",
        width: "100%"
      },
      "& button": {
        marginLeft: "3px",
        fontSize: `calc(${ICON_BUTTON_FONT_SIZE} - 0.1rem)`
      },
      "& svg": {
        display: "block"
      }
    }
  })
);

type Props = {
  getForecast: TGetForecast;
  lastLocation: string;
};

const Search = ({ lastLocation, getForecast }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIsShown, setSearchIsShown] = useState(false);
  const windowWidth = useContext(WindowWidth);
  const showSearchBtn = useRef<HTMLButtonElement | null>(null);
  const searchFieldRef = useRef<HTMLInputElement | null>(null);
  const theme = useTheme();
  const classes = useStyles();
  const dispatchSettings = useContext(SettingsDispatch);

  const breakpointMD = theme.breakpoints.values.md;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      setSearchQuery("");
      if (query === lastLocation) {
        getForecast(query);
      } else {
        dispatchSettings({ type: SET_LAST_LOCATION, lastLocation: query });
      }
    }
    if (windowWidth < breakpointMD && showSearchBtn.current) {
      setSearchIsShown(false);
      showSearchBtn.current.focus();
    }
  };

  const handleBlur = () => setSearchIsShown(false);

  useEffect(() => {
    if (windowWidth < breakpointMD && searchFieldRef.current) {
      searchFieldRef.current.focus();
    }
  }, [breakpointMD, searchIsShown, windowWidth]);

  const composeSearch = (onBlur?: () => void) => (
    <form className={classes.root} onSubmit={handleSubmit}>
      <SearchField
        ref={searchFieldRef}
        value={searchQuery}
        onBlur={onBlur}
        setSearchQuery={setSearchQuery}
      />
      {windowWidth >= breakpointMD && (
        <SearchButton label="Search" type="submit" />
      )}
    </form>
  );

  return (
    <>
      {windowWidth >= breakpointMD ? (
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
