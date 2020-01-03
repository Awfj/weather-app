import React from "react";
import { TGetForecast } from "../../types";
import { WindowWidthContext } from "../../contexts";
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
import { useCtx } from "../../containers/App/App";

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
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchIsShown, setSearchIsShown] = React.useState(false);
  const windowWidth = React.useContext(WindowWidthContext);
  const showSearchBtn = React.useRef<HTMLButtonElement | null>(null);
  const searchFieldRef = React.useRef<HTMLInputElement | null>(null);
  const theme = useTheme();
  const classes = useStyles();

  // const dispatch = React.useContext(SettingsDispatch)!;
  const dispatch = useCtx();

  const breakpointMD = theme.breakpoints.values.md;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      setSearchQuery("");
      if (query === lastLocation) {
        getForecast(query);
      } else {
        dispatch({ type: SET_LAST_LOCATION, lastLocation: query });
      }
    }
    if (windowWidth && windowWidth < breakpointMD && showSearchBtn.current) {
      setSearchIsShown(false);
      showSearchBtn.current.focus();
    }
  };

  const handleBlur = () => setSearchIsShown(false);

  React.useEffect(() => {
    if (windowWidth && windowWidth < breakpointMD && searchFieldRef.current) {
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
      {windowWidth && windowWidth >= breakpointMD && (
        <SearchButton label="Search" type="submit" />
      )}
    </form>
  );

  return (
    <>
      {windowWidth && windowWidth >= breakpointMD ? (
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
