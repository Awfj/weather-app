import { createContext } from "react";

export const themes = {
  light: {
    contrastText: "#000000",
    background: {
      header: "#f2f2ee",
      search: "#ffffff",
      body: "#e6e6e6",
      sidebar: "#b2b2b2"
    }
  },
  dark: {
    contrastText: "#ffffff",
    background: {
      header: "#171717",
      search: "#292929",
      body: "#171717",
      sidebar: "#f2f2f2"
    }
  },
  dynamic: {
    contrastText: "#ffffff",
    background: {
      header: "#15588d",
      search: "#2d6794",
      body: "#3678b5",
    }
  }
};

export const ThemeContext = createContext(themes.light);
