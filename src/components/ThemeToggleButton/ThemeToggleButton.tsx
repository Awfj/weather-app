import React from "react";
// import { THEMES } from "../../constants";
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

const ThemeToggleButton = ({ label, setIsDarkTheme, isDarkTheme }: Props) => {
  const handleClick = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
      localStorage.setItem("launch_theme", "light");
    } else {
      setIsDarkTheme(true);
      localStorage.setItem("launch_theme", "dark");
    }
  };

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} color="secondary" onClick={handleClick}>
        {isDarkTheme ? <WbSunnyIcon /> : <Brightness2Icon />}
      </IconButton>
    </Tooltip>
  );
};
ThemeToggleButton.defaultProps = defaultProps;

export default ThemeToggleButton;
