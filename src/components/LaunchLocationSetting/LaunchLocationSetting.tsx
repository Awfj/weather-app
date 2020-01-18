import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

import Form from "../../components/Form/Form";
import InputField from "../../components/InputField/InputField";
import InputButton from "../../components/InputButton/InputButton";
import Setting from "../../components/Setting/Setting";

import { TFormEvent } from "../../types";
import { FETCH_SUCCESS, SET_LAST_LOCATION } from "../../actions";
import { LOCAL_STORAGE } from "../../constants";
import { Action as FetchAction } from "../../hooks/useFetch";
import { SettingsDispatchCtx } from "../../contexts";
import { capitalizeFirstChar } from "../../utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "16rem"
    }
  })
);

export type LaunchLocationSettingProps = {
  dispatchFetch: React.Dispatch<FetchAction<string>>;
  launchLocation: string | null;
};

type Props = {} & LaunchLocationSettingProps;

const LaunchLocationSetting = ({ launchLocation, dispatchFetch }: Props) => {
  const classes = useStyles();
  const dispatchSettings = useContext(SettingsDispatchCtx);

  const handleSubmit: TFormEvent = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const launchLocation = form.launchLocation.value.trim().toLowerCase();
    if (launchLocation) {
      localStorage.setItem(LOCAL_STORAGE.launchLocation, launchLocation);
      dispatchFetch({ type: FETCH_SUCCESS, data: launchLocation });
      dispatchSettings({
        type: SET_LAST_LOCATION,
        lastLocation: launchLocation
      });
      event.currentTarget.reset();
    }
  };

  let heading = `Launch Location`;
  if (launchLocation) heading += `: ${capitalizeFirstChar(launchLocation)}`;
  return (
    <Setting heading={heading}>
      <Form onSubmit={event => handleSubmit(event)} className={classes.root}>
        <InputField name="launchLocation" placeholder="New Launch Location" />
        <InputButton label="Submit" type="submit">
          <EditIcon />
        </InputButton>
      </Form>
    </Setting>
  );
};

export default LaunchLocationSetting;
