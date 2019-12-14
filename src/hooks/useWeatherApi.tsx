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

const useWeatherApi = (lastLocation: string) => {
  // console.log(lastLocation)
  const [state, dispatch] = useFetch<ICurrentWeather>();

  const getWeather = useCallback(
    async (location?: string) => {
      // console.log("!!!");
      dispatch({ type: FETCH_INIT });
      if (!location) {
        location = getLastLocation(lastLocation);
      }
      removeExpiredWeather(location);
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
        sessionStorage.setItem("last_location", location);
        dispatch({ type: FETCH_SUCCESS, data: currentWeather });
      } else {
        dispatch({ type: FETCH_FAILURE });
      }
    },
    [dispatch, lastLocation]
  );
  useEffect(() => {
    getWeather();
  }, [dispatch, getWeather]);

  return [state, getWeather] as const;
};

export default useWeatherApi;
