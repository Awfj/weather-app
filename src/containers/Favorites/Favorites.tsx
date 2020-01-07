import React from "react";

import Page from "../../components/Page/Page";
import { APP_STRUCTURE } from "../../constants";

type Props = {
  launchLocation: string;
};

const Favorites = ({ launchLocation }: Props) => {
  console.log(launchLocation);
  return (
    <Page heading={APP_STRUCTURE.favorites}>
      <h2>Launch Location</h2>
      {launchLocation}
    </Page>
  );
};

export default Favorites;
