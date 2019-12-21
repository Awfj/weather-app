import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";

import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../Forecast/Forecast";
import useGeoLocationApi from "../../hooks/useGeoLocationApi";
import { THEMES } from "../../constants";

const App: React.FC = () => {
  const [{ data: launchLocation, isLoading, isError }] = useGeoLocationApi();
  const [lastLocation, setLastLocation] = React.useState<string | null>(null);
  const [theme, setTheme] = React.useState(THEMES.LIGHT);

  React.useEffect(() => {
    if (launchLocation) setLastLocation(launchLocation);
  }, [launchLocation]);

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        error={`We couldn't find your city automatically,
         you can still look for it manually.`}
      >
        {lastLocation && (
          <Forecast
            lastLocation={lastLocation}
            setLastLocation={setLastLocation}
            theme={theme}
            setTheme={setTheme}
          />
        )}
      </DataLoader>
    </StylesProvider>
  );
};

export default App;
