import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import { TOGGLE_THEME } from "../../actions";
import { useSettings } from "../../providers/SettingsProvider";

type Props = {} & typeof defaultProps;

const defaultProps = {
  label: "Toggle theme"
};

const ThemeToggle = ({ label }: Props) => {
  const [{ isThemeDark }, dispatch] = useSettings();

  const handleClick = () => dispatch({ type: TOGGLE_THEME });
  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} color="inherit" onClick={handleClick}>
        {isThemeDark ? <WbSunnyIcon /> : <Brightness2Icon />}
      </IconButton>
    </Tooltip>
  );
};

ThemeToggle.defaultProps = defaultProps;
export default ThemeToggle;
