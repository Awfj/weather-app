import React from "react";
import Page from "../../components/Page/Page";
import { APP_STRUCTURE } from "../../constants";

type Props = {
  launchLocation: string;
};

const Settings = ({ launchLocation }: Props) => {
  return (
    <Page heading={APP_STRUCTURE.settings}>
      <p>{launchLocation}</p>
    </Page>
  );
};

export default Settings;
