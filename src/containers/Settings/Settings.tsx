import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import AppHeader from "../../components/AppHeader/AppHeader";
import LaunchLocationSetting, {
  LaunchLocationSettingProps
} from "../../components/LaunchLocationSetting/LaunchLocationSetting";
import { APP_STRUCTURE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    optionSection: {
      "&:not(:last-child)": {
        border: "5px solid orange",
        paddingBottom: theme.spacing(1)
      }
    }
  })
);

type Props = {
  launchLocation: string | null;
} & LaunchLocationSettingProps;

const Settings = ({ launchLocation, ...other }: Props) => {
  const classes = useStyles();

  // console.log("settings");
  return (
    <>
      <AppHeader heading={APP_STRUCTURE.settings} />
      <section>
        <Typography variant="h2">Options</Typography>
        {launchLocation && (
          <section className={classes.optionSection}>
            <Typography variant="h3">Launch Location</Typography>
            <LaunchLocationSetting launchLocation={launchLocation} {...other} />
          </section>
        )}
      </section>
    </>
  );
};

export default Settings;
