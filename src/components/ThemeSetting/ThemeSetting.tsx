import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Setting from "../../components/Setting/Setting";
import useTheme from "../../hooks/useTheme";

const ThemeSetting = () => {
  const { isThemeDark, toggleTheme } = useTheme();

  return (
    <Setting heading={`Theme: ${isThemeDark ? "Dark" : "Light"}`}>
      <FormControlLabel
        value="Dark Theme"
        control={<Switch color="primary" />}
        label="Dark Theme"
        labelPlacement="start"
      />
    </Setting>
  );
};

export default ThemeSetting;
