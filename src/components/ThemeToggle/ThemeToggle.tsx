import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { isThemeDark, toggleTheme } = useTheme();
  const label = `Turn ${isThemeDark ? "Off" : "On"} Dark Theme`;

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} color="inherit" onClick={toggleTheme}>
        {isThemeDark ? <WbSunnyIcon /> : <Brightness2Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
