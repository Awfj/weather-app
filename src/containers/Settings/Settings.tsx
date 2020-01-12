import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Page from "../../components/Page/Page";
import { APP_STRUCTURE } from "../../constants";
import LaunchLocationSetting, {
  LaunchLocationSettingProps
} from "../../components/LaunchLocationSetting/LaunchLocationSetting";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    optionSection: {
      "&:not(:last-child)": {
        border: "5px solid orange",
        paddingBottom: theme.spacing(1)
      }
    }
  })
);

type Props = {} & LaunchLocationSettingProps;

const Settings = ({ ...other }: Props) => {
  const classes = useStyles();

  // console.log("settings");
  return (
    <Page heading={APP_STRUCTURE.settings} className={classes.root}>
      <Typography variant="h2">Options</Typography>
      <section className={classes.optionSection}>
        <Typography variant="h3">Launch Location</Typography>
        <LaunchLocationSetting {...other} />
      </section>
    </Page>
  );
};

export default Settings;
