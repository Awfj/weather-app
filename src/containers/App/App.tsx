import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../Forecast/Forecast";
import useGeoLocationApi from "../../hooks/useGeoLocationApi";
import { lightTheme, darkTheme } from "../../theme";
import useTheme from "../../hooks/useTheme";

const App: React.FC = () => {
  const [{ data: launchLocation, isLoading, isError }] = useGeoLocationApi();
  const [lastLocation, setLastLocation] = React.useState<string | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useTheme();

  React.useEffect(() => {
    if (launchLocation) setLastLocation(launchLocation);
  }, [launchLocation]);

  // console.log('app');
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
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
              isDarkTheme={isDarkTheme}
              setIsDarkTheme={setIsDarkTheme}
            />
          )}
        </DataLoader>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
