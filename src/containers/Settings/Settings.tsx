import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";

import Page from "../../components/Page/Page";
import Form from "../../components/Form/Form";
import InputField from "../../components/InputField/InputField";
import InputButton from "../../components/InputButton/InputButton";
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
        <Form>
          <InputField placeholder={launchLocation} />
          <InputButton label="Submit">
            <EditIcon />
          </InputButton>
        </Form>
      </section>
    </Page>
  );
};

export default Settings;
