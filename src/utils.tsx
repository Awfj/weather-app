import { ICurrentWeather, ICurrentWeatherResponse } from "./types";

export const checkIfExpired = (requestTime: number) => {
  const currentDate = new Date().getTime();
  const expirationDate = 7.2e6;
  const isExpired = currentDate - requestTime > expirationDate;
  return isExpired;
};

export const findLocation = async (): Promise<string> => {
  const response = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
  const data = await response.json();
  const city = data.city.toLowerCase();
  return city;
};

export const getCurrentWeather = async (queriedCity: string) => {
  const OPENWEATHERMAP_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${queriedCity}&appid=${OPENWEATHERMAP_KEY}&units=metric`;
  const response = await fetch(url);
  const data: ICurrentWeatherResponse = await response.json();

  const currentWeather: ICurrentWeather = {
    city: data.name,
    condition: data.weather[0].main,
    country: data.sys.country,
    temperature: String(Math.round(data.main.temp)),
    requestTime: new Date().getTime()
  };
  storeCurrentWeather(queriedCity, currentWeather);
  return currentWeather;
};

export const getDefaultCity = async () => {
  let defaultCity = localStorage.getItem("default_city");
  if (!defaultCity) {
    defaultCity = await findLocation();
    localStorage.setItem("default_city", defaultCity);
  }
  return defaultCity;
};

export const removeExpiredWeather = (city: string) => {
  for (let key in localStorage) {
    if (key.includes("weather") && !key.includes(city)) {
      const requestTime = JSON.parse(localStorage[key]).requestTime;
      if (checkIfExpired(requestTime)) {
        localStorage.removeItem(key);
      }
    }
  }
};

export const storeCurrentWeather = (city: string, data: object) => {
  localStorage.setItem(`weather_${city}`, JSON.stringify(data));
};
