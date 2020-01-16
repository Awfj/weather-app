import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import AppHeader from "../../components/AppHeader/AppHeader";
import LaunchLocationSetting, {
  LaunchLocationSettingProps
} from "../../components/LaunchLocationSetting/LaunchLocationSetting";
// import ThemeSetting from "../../components/ThemeSetting/ThemeSetting";
import { APP_STRUCTURE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > section": {
        marginTop: theme.spacing(3)
      }
    }
  })
);

type Props = {} & LaunchLocationSettingProps;

const Settings = ({ ...other }: Props) => {
  const classes = useStyles();

  // console.log("settings");
  return (
    <>
      <AppHeader heading={APP_STRUCTURE.settings} />
      <section className={classes.root}>
        <Typography variant="h2">Options</Typography>
        <LaunchLocationSetting {...other} />
        {/* <ThemeSetting /> */}
      </section>
    </>
  );
};

export default Settings;
