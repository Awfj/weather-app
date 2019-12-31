import {
  IForecast,
  ICurrentWeatherResponse,
  IGeoLocationResponse
} from "./types";
import { EXPIRATION_TIMEFRAME } from "./constants";

export const capitalizeFirstChar = (string: string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export const checkIfExpired = (requestTime: number) => {
  const currentDate = new Date().getTime();
  const isExpired = currentDate - requestTime > EXPIRATION_TIMEFRAME;
  return isExpired;
};

export const fetchLocation = async () => {
  const response = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
  if (!response.ok) return null;
  const data: IGeoLocationResponse = await response.json();
  const city = data.city.toLowerCase();
  return city;
};

export const fetchForecast = async (queriedCity: string) => {
  const OPENWEATHERMAP_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${queriedCity}`;
  const updatedUrl = `${url}&appid=${OPENWEATHERMAP_KEY}&units=metric`;
  const response = await fetch(updatedUrl);
  if (!response.ok) return null;
  const data: ICurrentWeatherResponse = await response.json();

  const forecast: IForecast = {
    currentWeather: {
      city: data.name,
      condition: data.weather[0].main,
      country: data.sys.country,
      temperature: String(Math.round(data.main.temp))
    },
    requestTime: new Date().getTime()
  };
  storeWeather(queriedCity, forecast);
  return forecast;
};

export const getExpirationTimeframe = (requestTime: number) => {
  return EXPIRATION_TIMEFRAME - (new Date().getTime() - requestTime);
};

export const getLaunchLocation = async () => {
  let launchLocation = localStorage.getItem("launch_location");
  if (!launchLocation) {
    launchLocation = await fetchLocation();
    if (!launchLocation) return null;
    localStorage.setItem("launch_location", launchLocation);
  }
  sessionStorage.setItem("last_location", launchLocation);
  return launchLocation;
};

export const getRemainingTime = (milliseconds: number) => {
  const hours = Math.floor((milliseconds / 3600000) % 60);
  const minutes = Math.floor((milliseconds / 60000) % 60);
  const seconds = Math.floor((milliseconds / 1000) % 60);
  return `${hours}h ${minutes}m ${seconds}s`;
};

export const removeExpiredWeather = (city: string) => {
  for (let key in localStorage) {
    if (key.includes("weather") && !key.includes(city)) {
      const requestTime: number = JSON.parse(localStorage[key]).requestTime;
      if (checkIfExpired(requestTime)) {
        localStorage.removeItem(key);
      }
    }
  }
};

export const storeWeather = (city: string, weather: object) => {
  localStorage.setItem(`weather_forecast_${city}`, JSON.stringify(weather));
};
