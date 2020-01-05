import React, { useContext } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import { EThemes } from "../../types";
import { SettingsDispatch } from "../../contexts";
import { TOGGLE_THEME } from "../../actions";

type Props = {
  isDarkTheme: boolean;
} & typeof defaultProps;

const defaultProps = {
  label: "Toggle theme"
};

const ThemeToggle = ({ label, isDarkTheme }: Props) => {
  const dispatchSettings = useContext(SettingsDispatch);

  const handleClick = () => {
    dispatchSettings({ type: TOGGLE_THEME });
    if (isDarkTheme) {
      localStorage.setItem("launch_theme", EThemes.Light);
    } else {
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
