import React from "react";
import {
  checkIfExpired,
  getCurrentWeather,
  removeExpiredWeather
} from "../utils";
import fetchData from "../reducers/fetchData";
import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions/actionTypes";
import { ICurrentWeather } from "../types";

const useWeatherApi = (location: string) => {
  const [state, dispatch] = React.useReducer(fetchData, {
    currentWeather: null,
    isLoading: false
  });

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
      dispatch({ type: FETCH_SUCCESS, currentWeather });
    } else {
      dispatch({ type: FETCH_FAILURE });
    }
  };

  React.useEffect(() => {
    getWeather(location);
  }, [location]);

  return [state, getWeather] as const;
};

export default useWeatherApi;
