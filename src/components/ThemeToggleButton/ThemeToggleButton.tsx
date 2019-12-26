import React from "react";
// import { THEMES } from "../../constants";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { TSetBoolean } from "../../types";

type Props = {
  setIsLightTheme: TSetBoolean;
  isLightTheme: boolean;
} & typeof defaultProps;
const defaultProps = {
  label: "Toggle theme"
};

const ThemeToggleButton = ({ label, setIsLightTheme, isLightTheme }: Props) => {
  const handleClick = () => {
    if (isLightTheme) {
      setIsLightTheme(false);
    } else {
      setIsLightTheme(true);
    }
  };

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} color="secondary" onClick={handleClick}>
        {isLightTheme ? <Brightness2Icon /> : <WbSunnyIcon />}
      </IconButton>
    </Tooltip>
  );
};
ThemeToggleButton.defaultProps = defaultProps;

export default ThemeToggleButton;
