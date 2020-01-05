import React from "react";

import Page from "../../components/Page/Page";
import { APP_STRUCTURE } from "../../constants";

type Props = {};

const Favorites = () => {
  return (
    <Page heading={APP_STRUCTURE.favorites}>
      <p>favorites</p>
    </Page>
  );
};

export default Favorites;
