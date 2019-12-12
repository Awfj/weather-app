import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";

// import styles from "./App.module.scss";
import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../Forecast/Forecast";
import { getLaunchLocation } from "../../utils";

const App: React.FC = () => {
  const [lastLocation, setLastLocation] = React.useState<string | null>(null);

  React.useEffect(() => {
    const getLaunchWeather = async () => {
      const launchLocation = await getLaunchLocation();
      if (launchLocation) {
        setLastLocation(launchLocation);
      }
    };
    getLaunchWeather();
  }, []);

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <DataLoader
        error={`We couldn't find your city automatically,
         you can still look for it manually.`}
        isDataExist={!!lastLocation}
      >
        {lastLocation && (
          <Forecast
            lastLocation={lastLocation}
            onSetLastLocation={setLastLocation}
          />
        )}
      </DataLoader>
    </StylesProvider>
  );
};

export default App;
