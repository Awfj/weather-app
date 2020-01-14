import React from "react";
import Welcome, { WelcomeProps } from "../../containers/Welcome/Welcome";
import Forecast from "../../containers/Forecast/Forecast";

type Props = {
  lastLocation: string | null;
} & WelcomeProps;

const FrontPage = ({ lastLocation, ...other }: Props) => {
  return lastLocation ? (
    <Forecast lastLocation={lastLocation} />
  ) : (
    <Welcome {...other} />
  );
};

export default FrontPage;
