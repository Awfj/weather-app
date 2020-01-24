import { useCallback } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useSettings from "../hooks/useSettings";
import { TURN_ON_DARK_THEME, TURN_OFF_DARK_THEME } from "../actions";
import { LOCAL_STORAGE } from "../constants";

const useTheme = () => {
  const [{ isThemeDark }, dispatch] = useSettings();
  const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true
  });

  const turnOnDarkTheme = useCallback(() => {
    dispatch({ type: TURN_ON_DARK_THEME });
  }, [dispatch]);

  const turnOffDarkTheme = useCallback(() => {
    dispatch({ type: TURN_OFF_DARK_THEME });
  }, [dispatch]);

  const toggleTheme = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE.isThemeDark, String(!isThemeDark));
    isThemeDark ? turnOffDarkTheme() : turnOnDarkTheme();
  }, [turnOnDarkTheme, turnOffDarkTheme, isThemeDark]);

  const adjustTheme = useCallback(
    (isThemeDark: boolean) => {
      isThemeDark
        ? dispatch({ type: TURN_ON_DARK_THEME })
        : dispatch({ type: TURN_OFF_DARK_THEME });
    },
    [dispatch]
  );

  return { isThemeDark, prefersDarkTheme, toggleTheme, adjustTheme };
};

export default useTheme;
