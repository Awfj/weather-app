import React, { useRef, useContext } from "react";
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
  const InputFieldRef = useRef<HTMLInputElement | null>(null);
  const dispatchSettings = useContext(SettingsDispatchCtx);

  const handleSubmit: TFormEvent = event => {
    event.preventDefault();
    if (InputFieldRef.current) {
      const newLaunchLocation = InputFieldRef.current.value
        .trim()
        .toLowerCase();
      localStorage.setItem(LOCAL_STORAGE.launchLocation, newLaunchLocation);
      InputFieldRef.current.value = "";
      dispatchFetch({ type: FETCH_SUCCESS, data: newLaunchLocation });
      dispatchSettings({
        type: SET_LAST_LOCATION,
        lastLocation: newLaunchLocation
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField ref={InputFieldRef} placeholder={launchLocation} />
      <InputButton label="Submit" type="submit">
        <EditIcon />
      </InputButton>
    </Form>
  );
};

export default LaunchLocationSetting;
