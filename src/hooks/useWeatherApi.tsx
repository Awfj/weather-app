import React from "react";
import {
  checkIfExpired,
  getCurrentWeather,
  getDefaultCity,
  removeExpiredWeather
} from "../utils";
import fetchData from "../reducers/fetchData";
import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions/actionTypes";
import { ICurrentWeather } from "../types";

const useWeatherApi = () => {
  // console.log('api')
  const [state, dispatch] = React.useReducer(fetchData, {
    currentWeather: null,
    errorMessage: null,
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
      const errorMessage = `Requested city can't be found. Please, check if the name 
      is correct, change service or try again later.`;
      dispatch({ type: FETCH_FAILURE, errorMessage });
    }
  };

  React.useEffect(() => {
    const getInitialWeather = async () => {
      const defaultCity = await getDefaultCity();
      if (defaultCity) {
        removeExpiredWeather(defaultCity);
        getWeather(defaultCity);
      } else {
        const errorMessage = `We couldn't find your city automatically,
         you can still look for it manually.`;
        dispatch({ type: FETCH_FAILURE, errorMessage });
      }
    };
    getInitialWeather();
  }, []);

  return [state, getWeather] as const;
};

export default useWeatherApi;