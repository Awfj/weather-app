import {
  ICurrentWeather,
  ICurrentWeatherResponse,
  IGeoLocationResponse
} from "./types";

export const checkIfExpired = (requestTime: number) => {
  const currentDate = new Date().getTime();
  const EXPIRATION_TIME = 7.2e6;
  const isExpired = currentDate - requestTime > EXPIRATION_TIME;
  return isExpired;
};

export const findLocation = async () => {
  const response = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
  if (!response.ok) return null;
  const data: IGeoLocationResponse = await response.json();
  const city = data.city.toLowerCase();
  return city;
};

export const getCurrentWeather = async (queriedCity: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${queriedCity}`;
  const data = await makeRequest(url);
  if (!data) return null;

  const currentWeather: ICurrentWeather = {
    city: data.name,
    condition: data.weather[0].main,
    country: data.sys.country,
    temperature: String(Math.round(data.main.temp)),
    requestTime: new Date().getTime()
  };
  storeWeather(queriedCity, currentWeather);
  return currentWeather;
};

export const getLastLocation = (launchLocation: string) => {
  let lastLocation = sessionStorage.getItem("last_location");
  if (!lastLocation) lastLocation = launchLocation;
  return lastLocation;
};

export const getLaunchLocation = async () => {
  let launchLocation = localStorage.getItem("launch_location");
  if (!launchLocation) {
    launchLocation = await findLocation();
    if (!launchLocation) return null;
    localStorage.setItem("launch_location", launchLocation);
  }
  sessionStorage.setItem("last_location", launchLocation);
  return launchLocation;
};

export const makeRequest = async (url: string) => {
  const OPENWEATHERMAP_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;
  const updatedUrl = `${url}&appid=${OPENWEATHERMAP_KEY}&units=metric`;
  const response = await fetch(updatedUrl);
  if (!response.ok) return null;
  const data: ICurrentWeatherResponse = await response.json();
  return data;
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
  localStorage.setItem(`weather_${city}`, JSON.stringify(weather));
};
