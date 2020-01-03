import React from "react";

import Page, { PageProps } from "../../components/Page/Page";
import { APP_STRUCTURE } from "../../constants";

type Props = {} & PageProps;

const Favorites = ({ isDrawerOpen, toggleDrawer }: Props) => {
  return (
    <Page
      isDrawerOpen={isDrawerOpen}
      toggleDrawer={toggleDrawer}
      heading={APP_STRUCTURE.FAVORITES}
    >
      <p>favorites</p>
    </Page>
  );
};

export default Favorites;
