import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import DataLoader from "../../components/DataLoader/DataLoader";
import { APP_STRUCTURE } from "../../constants";

type Props = {
  isLoading: boolean;
  isError: boolean;
};

const Welcome = ({ isLoading, isError }: Props) => {
  return (
    <>
      <AppHeader heading={APP_STRUCTURE.welcome} />
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        error={`We couldn't find your city automatically,
         you can still look for it manually.`}
      >
        <p>Welcome</p>
      </DataLoader>
    </>
  );
};

export default Welcome;
