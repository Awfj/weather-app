import { useEffect } from "react";
import {
  checkIfExpired,
  getCurrentWeather,
  removeExpiredWeather
} from "../utils";
import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions";
import { ICurrentWeather } from "../types";
import useFetch from "./useFetch";

const useWeatherApi = (location: string) => {
  const [state, dispatch] = useFetch<ICurrentWeather>();

  useEffect(() => {
    const getWeather = async (queriedCity: string) => {
      dispatch({ type: FETCH_INIT });
      removeExpiredWeather(queriedCity);
      const storedWeather = localStorage.getItem(`weather_${queriedCity}`);
      let currentWeather: ICurrentWeather | null;
      if (storedWeather) {
        const { requestTime } = JSON.parse(storedWeather);
        if (checkIfExpired(requestTime)) {
          currentWeather = await getCurrentWeather(queriedCity);
        } else {
          currentWeather = JSON.parse(storedWeather);
        }
      } else {
        currentWeather = await getCurrentWeather(queriedCity);
      }
      if (currentWeather) {
        dispatch({ type: FETCH_SUCCESS, data: currentWeather });
      } else {
        dispatch({ type: FETCH_FAILURE });
      }
    };
    getWeather(location);
  }, [dispatch, location]);

  return [state] as const;
};

export default useWeatherApi;
