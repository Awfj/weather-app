import React, { useState, useRef, useEffect } from "react";

import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from "@material-ui/core/styles";

import Form from "../Form/Form";
import SearchButton from "../SearchButton/SearchButton";
import SearchField from "../SearchField/SearchField";

import { SET_LAST_LOCATION } from "../../actions";
import { TFormEvent, TGetData } from "../../types";
import { useSettings } from "../../providers/SettingsProvider";
import { useWindowWidth } from "../../providers/WindowWidthProvider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "15px",
      zIndex: 1,
      [theme.breakpoints.up("md")]: {
        position: "static",
        marginRight: theme.spacing(1.5),
        transform: "none",
        zIndex: "auto"
      }
    }
  })
);

export type SearchProps = {
  lastLocation: string | null;
};

type Props = {
  getData: TGetData;
} & SearchProps;

const Search = ({ lastLocation, getData }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIsShown, setSearchIsShown] = useState(false);
  const windowWidth = useWindowWidth();
  const showSearchBtn = useRef<HTMLButtonElement>(null);
  const searchFieldRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const classes = useStyles();
  const [, dispatch] = useSettings();

  const breakpointMD = theme.breakpoints.values.md;

  const handleSubmit: TFormEvent = event => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      setSearchQuery("");
      if (query === lastLocation) {
        getData(query);
      } else {
        dispatch({ type: SET_LAST_LOCATION, lastLocation: query });
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
    <Form className={classes.root} onSubmit={handleSubmit}>
      <SearchField
        ref={searchFieldRef}
        value={searchQuery}
        onBlur={onBlur}
        setSearchQuery={setSearchQuery}
      />
      {windowWidth >= breakpointMD && (
        <SearchButton label="Search" type="submit" />
      )}
    </Form>
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
