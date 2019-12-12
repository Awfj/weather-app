import React from "react";
import { themes } from "../../theme";
import { ITheme } from "../../types";
import Button from "../Button/Button";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

type Props = {
  onSetTheme: (value: React.SetStateAction<ITheme>) => void;
  theme: ITheme;
};

const ThemeToggle = ({ onSetTheme, theme }: Props) => {
  const isLightTheme = theme === themes.light;

  const handleClick = () => {
    if (isLightTheme) {
      onSetTheme(themes.dark);
    } else {
      onSetTheme(themes.light);
    }
  };

  return (
    <Button
      label="Toggle theme"
      onClick={handleClick}
      customStyles={{ color: theme.contrastText }}
    >
      {isLightTheme ? <Brightness2Icon /> : <WbSunnyIcon />}
    </Button>
  );
};

export default ThemeToggle;
