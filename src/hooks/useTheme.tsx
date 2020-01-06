import { useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { TOGGLE_THEME } from "../actions";
import { TDispatchSettings } from "../types";
import { LOCAL_STORAGE } from "../constants";

const useTheme = (dispatch: TDispatchSettings, isThemeDark: boolean) => {
  const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true
  });

  useEffect(() => {
    let storedTheme = localStorage.getItem(LOCAL_STORAGE.isThemeDark);
    if (storedTheme) {
      if (isThemeDark !== JSON.parse(storedTheme)) {
        dispatch({ type: TOGGLE_THEME });
      }
    } else {
      if (isThemeDark !== prefersDarkTheme) {
        dispatch({ type: TOGGLE_THEME });
      }
      localStorage.setItem(LOCAL_STORAGE.isThemeDark, String(prefersDarkTheme));
    }
  }, [dispatch, isThemeDark, prefersDarkTheme]);
};

export default useTheme;
