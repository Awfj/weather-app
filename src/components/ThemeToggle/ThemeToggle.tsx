import React from "react";
import { EThemes } from "../../types";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { TSetBoolean } from "../../types";

type Props = {
  isDarkTheme: boolean;
  setIsDarkTheme: TSetBoolean;
} & typeof defaultProps;

const defaultProps = {
  label: "Toggle theme"
};

const ThemeToggle = ({ label, setIsDarkTheme, isDarkTheme }: Props) => {
  const handleClick = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
      localStorage.setItem("launch_theme", EThemes.Light);
    } else {
      setIsDarkTheme(true);
      localStorage.setItem("launch_theme", EThemes.Dark);
    }
  };

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} color="inherit" onClick={handleClick}>
        {isDarkTheme ? <WbSunnyIcon /> : <Brightness2Icon />}
      </IconButton>
    </Tooltip>
  );
};

ThemeToggle.defaultProps = defaultProps;
export default ThemeToggle;
