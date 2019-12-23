import React from "react";
import { THEMES } from "../../constants";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

type Props = {
  setTheme: (value: React.SetStateAction<string>) => void;
  theme: string;
} & typeof defaultProps;
const defaultProps = {
  label: "Toggle theme"
};

const ThemeToggleButton = ({ label, setTheme, theme }: Props) => {
  const isLightTheme = theme === THEMES.LIGHT;

  const handleClick = () => {
    if (isLightTheme) {
      setTheme(THEMES.DARK);
    } else {
      setTheme(THEMES.LIGHT);
    }
  };

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} onClick={handleClick}>
        {isLightTheme ? <Brightness2Icon /> : <WbSunnyIcon />}
      </IconButton>
    </Tooltip>
  );
};
ThemeToggleButton.defaultProps = defaultProps;

export default ThemeToggleButton;
