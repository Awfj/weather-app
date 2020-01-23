import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import { TOGGLE_THEME } from "../../actions";
import useSettings from "../../hooks/useSettings";

const ThemeToggle = () => {
  const [{ isThemeDark }, dispatch] = useSettings();

  const handleClick = () => dispatch({ type: TOGGLE_THEME });
  const label = `Turn ${isThemeDark ? "Off" : "On"} Dark Theme`;

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} color="inherit" onClick={handleClick}>
        {isThemeDark ? <WbSunnyIcon /> : <Brightness2Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
