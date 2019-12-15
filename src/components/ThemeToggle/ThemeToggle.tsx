import React from "react";
import { THEMES } from "../../constants";
import Button from "../Button/Button";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

type Props = {
  setTheme: (value: React.SetStateAction<string>) => void;
  theme: string;
};

const ThemeToggle = ({ setTheme, theme }: Props) => {
  const isLightTheme = theme === THEMES.LIGHT;

  const handleClick = () => {
    if (isLightTheme) {
      setTheme(THEMES.DARK);
    } else {
      setTheme(THEMES.LIGHT);
    }
  };

  return (
    <Button label="Toggle theme" onClick={handleClick}>
      {isLightTheme ? <Brightness2Icon /> : <WbSunnyIcon />}
    </Button>
  );
};

export default ThemeToggle;
