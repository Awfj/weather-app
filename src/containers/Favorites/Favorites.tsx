import React from "react";

import Page, { PageProps } from "../../components/Page/Page";
import { APP_STRUCTURE } from "../../constants";

type Props = {} & PageProps;

const Favorites = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
  return (
    <Page
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      heading={APP_STRUCTURE.FAVORITES}
    >
      <p>favorites</p>
    </Page>
  );
};

export default Favorites;
