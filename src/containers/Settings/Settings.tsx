import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Page from "../../components/Page/Page";
import { APP_STRUCTURE } from "../../constants";

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

type Props = {
  launchLocation: string;
};

const Settings = ({ launchLocation }: Props) => {
  const classes = useStyles();
  return (
    <Page heading={APP_STRUCTURE.settings} className={classes.root}>
      <Typography variant="h2">Options</Typography>
      <section className={classes.optionSection}>
        <Typography variant="h3">Launch Location</Typography>
        <form>
          <input type="text" placeholder={launchLocation} />
        </form>
      </section>
      {/* <List disablePadding>
        <ListItem disableGutters>
          <ListItemText>Launch Location</ListItemText>
        </ListItem>
      </List> */}
    </Page>
  );
};

export default Settings;
