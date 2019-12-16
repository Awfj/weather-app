import { useEffect, useCallback } from "react";
import {
  checkIfExpired,
  getCurrentWeather,
  removeExpiredWeather,
  getLastLocation
} from "../utils";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
import { ICurrentWeather } from "../types";
import useFetch from "./useFetch";

const useWeatherApi = (launchLocation: string) => {
  const [state, dispatch] = useFetch<ICurrentWeather>();

  const getWeather = useCallback(
    async (location: string, isLaunchLocation: boolean = true) => {
      dispatch({ type: FETCH_INIT });
      if (isLaunchLocation) {
        location = getLastLocation(location);
      }
      console.log(isLaunchLocation);
      removeExpiredWeather(location);
      sessionStorage.setItem("last_location", location);
      const storedWeather = localStorage.getItem(`weather_${location}`);
      let currentWeather: ICurrentWeather | null;
      if (storedWeather) {
        const { requestTime } = JSON.parse(storedWeather);
        if (checkIfExpired(requestTime)) {
          currentWeather = await getCurrentWeather(location);
        } else {
          currentWeather = JSON.parse(storedWeather);
        }
      } else {
        currentWeather = await getCurrentWeather(location);
      }
      if (currentWeather) {
        dispatch({ type: FETCH_SUCCESS, data: currentWeather });
      } else {
        dispatch({ type: FETCH_FAILURE });
      }
    },
    [dispatch]
  );
  useEffect(() => {
    getWeather(launchLocation);
  }, [dispatch, getWeather, launchLocation]);

  return [state, getWeather] as const;
};

export default useWeatherApi;
