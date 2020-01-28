import { useEffect, useCallback } from "react";
import { fetchForecast, checkIfExpired, removeExpiredWeather } from "../utils";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
import { IForecast, TMeasurementUnits } from "../types";
import useFetch from "./useFetch";
import useTemperature from "./useTemperature";

const useWeatherApi = (lastLocation?: string) => {
  const [state, dispatch] = useFetch<IForecast>();
  const { measurementUnits } = useTemperature();

  const getForecast = useCallback(
    async (
      location: string,
      measurementUnits: TMeasurementUnits = "metric"
    ) => {
      console.log("run");
      dispatch({ type: FETCH_INIT });
      removeExpiredWeather(location);
      const storedForecast = localStorage.getItem(
        `weather_forecast_${location}`
      );
      let forecast: IForecast | null;
      if (storedForecast) {
        const { requestTime } = JSON.parse(storedForecast);
        if (checkIfExpired(requestTime)) {
          forecast = await fetchForecast(location, measurementUnits);
        } else {
          forecast = JSON.parse(storedForecast);
        }
      } else {
        forecast = await fetchForecast(location, measurementUnits);
      }
      if (forecast) {
        dispatch({ type: FETCH_SUCCESS, data: forecast });
      } else {
        dispatch({ type: FETCH_FAILURE });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (lastLocation) getForecast(lastLocation, measurementUnits);
  }, [dispatch, getForecast, lastLocation, measurementUnits]);

  return [state, getForecast] as const;
};

export default useWeatherApi;
