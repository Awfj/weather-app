import React, { useContext } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Setting from "../../components/Setting/Setting";
import { TOGGLE_THEME } from "../../actions";
import { SettingsDispatchCtx, SettingsCtx } from "../../contexts";

const ThemeSetting = () => {
  const dispatchSettings = useContext(SettingsDispatchCtx);
  const { isThemeDark } = useContext(SettingsCtx);
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
