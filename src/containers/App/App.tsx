import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";

// import styles from "./App.module.scss";
import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../Forecast/Forecast";
import useGeoLocationApi from "../../hooks/useGeoLocationApi";

const App: React.FC = () => {
  const [{ data: launchLocation, isLoading, isError }] = useGeoLocationApi();

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        error={`We couldn't find your city automatically,
         you can still look for it manually.`}
      >
        {launchLocation && <Forecast launchLocation={launchLocation} />}
      </DataLoader>
    </StylesProvider>
  );
};

export default App;
