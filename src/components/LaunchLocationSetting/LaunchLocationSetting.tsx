import React, { useContext } from "react";
import EditIcon from "@material-ui/icons/Edit";
import Form from "../../components/Form/Form";
import InputField from "../../components/InputField/InputField";
import InputButton from "../../components/InputButton/InputButton";
import { TFormEvent } from "../../types";
import { FETCH_SUCCESS, SET_LAST_LOCATION } from "../../actions";
import { LOCAL_STORAGE } from "../../constants";
import { Action as FetchAction } from "../../hooks/useFetch";
import { SettingsDispatchCtx } from "../../contexts";

export type LaunchLocationSettingProps = {
  launchLocation: string;
  dispatchFetch: React.Dispatch<FetchAction<string>>;
};

type Props = {} & LaunchLocationSettingProps;

const LaunchLocationSetting = ({ launchLocation, dispatchFetch }: Props) => {
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

  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <InputField name="launchLocation" placeholder={launchLocation} />
      <InputButton label="Submit" type="submit">
        <EditIcon />
      </InputButton>
    </Form>
  );
};

export default LaunchLocationSetting;
