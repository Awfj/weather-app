import { IForecast, ICurrentWeatherData, IGeoLocationData } from "./types";
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
  try {
    const response = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
    if (!response.ok) return null;
    const data: IGeoLocationData = await response.json();
    const city = data.city.toLowerCase();
    return city;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return null;
  }
};

export const fetchForecast = async (queriedCity: string) => {
  try {
    const OPENWEATHERMAP_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${queriedCity}`;
    const updatedUrl = `${url}&appid=${OPENWEATHERMAP_KEY}&units=metric`;
    const response = await fetch(updatedUrl);
    if (!response.ok) return null;
    const data: ICurrentWeatherData = await response.json();

    const forecast: IForecast = {
      currentWeather: {
        city: data.name,
        condition: data.weather[0].main,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        cloudiness: data.clouds.all,
        windSpeed: data.wind.speed,
        visibility: data.visibility / 1000,
        pressure: data.main.pressure,
        humidity: data.main.humidity
      },
      requestTime: new Date().getTime()
    };
    storeWeather(queriedCity, forecast);
    return forecast;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return null;
  }
};

export const getExpirationTimeframe = (requestTime: number) => {
  return EXPIRATION_TIMEFRAME - (new Date().getTime() - requestTime);
};

export const getLaunchLocation = async () => {
  const launchLocation = await fetchLocation();
  if (!launchLocation) return null;
  localStorage.setItem("launch_location", launchLocation);
  return launchLocation;
};

export const getReadableRequestTime = (requestTime: number) => {
  const currentYear = new Date().getFullYear();
  const requestYear = new Date(requestTime).getFullYear();
  const time = sliceSplittedString(
    new Date(requestTime).toTimeString(),
    " ",
    0,
    1
  ).slice(0, 5);
  const date = new Date(requestTime).toDateString();

  if (currentYear === requestYear) {
    const currentDay = new Date().getDate();
    const requestDay = new Date(requestTime).getDate();

    if (currentDay === requestDay) {
      return time;
    } else if (currentDay - 1 === requestDay) {
      return `Yesterday, ${time}`;
    } else {
      return `${sliceSplittedString(date, " ", 1, 3)}, ${time}`;
    }
  } else {
    return `${sliceSplittedString(date, " ", 1)}, ${time}`;
  }
};

export const getRemainingTime = (milliseconds: number) => {
  milliseconds += 60000;
  const hours = Math.floor((milliseconds / 3600000) % 60);
  const minutes = Math.floor((milliseconds / 60000) % 60);
  // const seconds = Math.floor((milliseconds / 1000) % 60);
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
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

export const sliceSplittedString = (
  string: string,
  separator: string,
  beginIndex: number,
  endIndex?: number
) => {
  return string
    .split(separator)
    .slice(beginIndex, endIndex)
    .join(separator);
};

export const storeWeather = (city: string, weather: object) => {
  localStorage.setItem(`weather_forecast_${city}`, JSON.stringify(weather));
};
