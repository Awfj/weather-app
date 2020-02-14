import React, { useState, useRef, useEffect } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Form from "../Form/Form";
import SearchButton from "../SearchButton/SearchButton";
import SearchField from "../SearchField/SearchField";

import { SET_LAST_LOCATION } from "../../actions";
import { TFormEvent, TGetData } from "../../types";
import useSettings from "../../hooks/useSettings";
import useBreakpoints from "../../hooks/useBreakpoints";

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

const Search = (props: Props) => {
  const { lastLocation, getData } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIsShown, setSearchIsShown] = useState(false);
  const showSearchBtn = useRef<HTMLButtonElement>(null);
  const searchFieldRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const isUIMd = useBreakpoints("md");
  const [, dispatch] = useSettings();

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
    if (!isUIMd && showSearchBtn.current) {
      setSearchIsShown(false);
      showSearchBtn.current.focus();
    }
  };

  const handleBlur = () => setSearchIsShown(false);

  useEffect(() => {
    if (!isUIMd && searchFieldRef.current) {
      searchFieldRef.current.focus();
    }
  }, [searchIsShown, isUIMd]);

  const composeSearch = (onBlur?: () => void) => (
    <Form className={classes.root} onSubmit={handleSubmit}>
      <SearchField
        ref={searchFieldRef}
        value={searchQuery}
        onBlur={onBlur}
        setSearchQuery={setSearchQuery}
      />
      {isUIMd && <SearchButton label="Search" type="submit" />}
    </Form>
  );

  return (
    <>
      {isUIMd ? (
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
