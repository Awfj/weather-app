import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import DataLoader from "../../components/DataLoader/DataLoader";
import { APP_STRUCTURE } from "../../constants";

export type WelcomeProps = {
  isLoading: boolean;
  isError: boolean;
};

type Props = {
  search: JSX.Element;
} & WelcomeProps;

const Welcome = ({ search, isLoading, isError }: Props) => {
  // console.log("welcome");
  return (
    <>
      <AppHeader heading={APP_STRUCTURE.forecast} />
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        errorMessage={`We couldn't find your city automatically,
         you can still look for it manually.`}
      >
        <div>
          <p>Welcome</p>
          {search}
        </div>
      </DataLoader>
    </>
  );
};

export default Welcome;
