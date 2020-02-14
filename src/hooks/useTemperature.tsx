import useSettings from "./useSettings";
import { CHANGE_TEMPERATURE_SCALE } from "../actions";
import { TMeasurementUnits, TTemperatureScales } from "../types";

const useTemperature = () => {
  const [{ temperatureScale }, dispatch] = useSettings();

  const isCelsius = temperatureScale === "celsius";
  const measurementUnits: TMeasurementUnits = isCelsius ? "metric" : "imperial";
  const temperatureScales: TTemperatureScales = ["celsius", "fahrenheit"];

  const changeTemperatureScale = () => {
    dispatch({
      type: CHANGE_TEMPERATURE_SCALE,
      temperatureScale: isCelsius ? "fahrenheit" : "celsius"
    });
  };

  const convertTemperature = (temperature: number) => {
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
    changeTemperatureScale,
    convertTemperature
  };
};

export default useTemperature;
