import { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useTheme = () => {
  const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true
  });
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    let launchTheme = localStorage.getItem("launch_theme");
    if (!launchTheme) {
      setIsDarkTheme(prefersDarkTheme);
      launchTheme = prefersDarkTheme ? "dark" : "light";
      localStorage.setItem("launch_theme", launchTheme);
    }
  }, [prefersDarkTheme]);
  return [isDarkTheme, setIsDarkTheme] as const;
};

export default useTheme;
