import useSettings from "./useSettings";
import { CHANGE_TEMPERATURE_SCALE } from "../actions";
import { TMeasurementUnits, TTemperatureScales } from "../types";

const useTemperature = () => {
  const [{ temperatureScale }, dispatch] = useSettings();

  const measurementUnits: TMeasurementUnits =
    temperatureScale === "celsius" ? "metric" : "imperial";

  const temperatureScales: TTemperatureScales = ["celsius", "fahrenheit"];

  const isCelsius = temperatureScale === "celsius";

  const convertTemperatureScale = (temperature: number) => {
    dispatch({
      type: CHANGE_TEMPERATURE_SCALE,
      temperatureScale: isCelsius ? "fahrenheit" : "celsius"
    });
    const convertedTemperature = isCelsius
      ? temperature * 1.8 + 32
      : (temperature - 32) / 1.8;
    return convertedTemperature;
  };

  return {
    temperatureScale,
    measurementUnits,
    isCelsius,
    temperatureScales,
    convertTemperatureScale
  };
};

export default useTemperature;
