import useSettings from "./useSettings";
import { SWITCH_TO_CELSIUS, SWITCH_TO_FAHRENHEIT } from "../actions";
import { TMeasurementUnits } from "../types";

const useTemperature = () => {
  const [{ temperatureScale }, dispatch] = useSettings();

  const measurementUnits: TMeasurementUnits =
    temperatureScale === "celsius" ? "metric" : "imperial";

  const convertCelsiusToFahrenheit = (temperature: number) => {
    if (temperatureScale === "celsius") {
      dispatch({ type: SWITCH_TO_FAHRENHEIT });
      return temperature * 1.8 + 32;
    }
  };

  const convertFahrenheitToCelsius = (temperature: number) => {
    if (temperatureScale === "fahrenheit") {
      dispatch({ type: SWITCH_TO_CELSIUS });
      return (temperature - 32) / 1.8;
    }
  };

  return {
    temperatureScale,
    measurementUnits,
    convertCelsiusToFahrenheit,
    convertFahrenheitToCelsius
  };
};

export default useTemperature;
