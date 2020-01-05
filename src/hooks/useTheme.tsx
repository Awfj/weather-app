import { useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { TOGGLE_THEME } from "../actions";
import { TDispatchSettings } from "../types";

const useTheme = (dispatch: TDispatchSettings, isDarkTheme: boolean) => {
  const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true
  });

  useEffect(() => {
    let launchTheme = localStorage.getItem("launch_theme");
    if (launchTheme) {
      if (isDarkTheme !== (launchTheme === "dark")) {
        dispatch({ type: TOGGLE_THEME });
      }
    } else {
      if (isDarkTheme !== prefersDarkTheme) {
        dispatch({ type: TOGGLE_THEME });
      }
      launchTheme = prefersDarkTheme ? "dark" : "light";
      localStorage.setItem("launch_theme", launchTheme);
    }
  }, [dispatch, isDarkTheme, prefersDarkTheme]);
};

export default useTheme;
