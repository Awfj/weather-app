import { useEffect, useCallback } from "react";
import { fetchForecast, removeExpiredWeather } from "../utils";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
import { IForecast } from "../types";
import useFetch from "./useFetch";

const useWeatherApi = (launchLocation: string) => {
  const [state, dispatch] = useFetch<IForecast>();

  const getForecast = useCallback(
    async (location: string) => {
      dispatch({ type: FETCH_INIT });
      removeExpiredWeather(location);
      const storedForecast = localStorage.getItem(
        `weather_forecast_${location}`
      );
      let forecast: IForecast | null;
      if (storedForecast) {
        forecast = JSON.parse(storedForecast);
      } else {
        forecast = await fetchForecast(location);
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
    getForecast(launchLocation);
  }, [dispatch, getForecast, launchLocation]);

  return [state, getForecast] as const;
};

export default useWeatherApi;
