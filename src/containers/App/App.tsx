import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import DataLoader from "../../components/DataLoader/DataLoader";
import Forecast from "../Forecast/Forecast";
import useGeoLocationApi from "../../hooks/useGeoLocationApi";
import { lightTheme, darkTheme } from "../../theme";

const App: React.FC = () => {
  const [{ data: launchLocation, isLoading, isError }] = useGeoLocationApi();
  const [lastLocation, setLastLocation] = React.useState<string | null>(null);
  const [isLightTheme, setIsLightTheme] = React.useState(true);

  React.useEffect(() => {
    if (launchLocation) setLastLocation(launchLocation);
  }, [launchLocation]);

  // console.log(theme.palette.type)

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
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
              isLightTheme={isLightTheme}
              setIsLightTheme={setIsLightTheme}
            />
          )}
        </DataLoader>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
