import { Dispatch } from "react";
import { Action as SettingsAction } from "./reducers/reduceSettings";

export interface IForecast {
  currentWeather: ICurrentWeather;
  requestTime: number;
}

export interface ICurrentWeather {
  city: string;
  country: string;
  condition: string;
  temperature: number;
  cloudiness: number;
  windSpeed: number;
  pressure: number;
  humidity: number;
}

export interface ICurrentWeatherData {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  clouds: {
    all: number;
  };
  name: string;
  sys: {
    country: string;
  };
  weather: [
    {
      main: string;
    }
  ];
  wind: {
    speed: number;
  };
}

export interface IGeoLocationData {
  city: string;
}

export interface IInteractiveActions {
  open: "open";
  close: "close";
  toggle: "toggle";
}

export interface ILocalStorage {
  isDrawerOpen: "isDrawerOpen";
  isThemeDark: "isThemeDark";
  weatherForecast: "weather_forecast_";
  launchLocation: "launch_location";
}

export interface IAppStructure {
  welcome: "welcome";
  forecast: "forecast";
  favorites: "favorites";
  settings: "settings";
}

export type TMeasurementUnits = "metric" | "imperial";

export interface ISettings {
  favorites: string[];
  isDrawerOpen: boolean;
  isThemeDark: boolean;
  lastLocation: string | null;
  temperatureScale: "celsius" | "fahrenheit";
}

export type TSetString = (value: React.SetStateAction<string>) => void;
export type TSetBoolean = (value: React.SetStateAction<boolean>) => void;
export type TSetStringOrNull = (
  value: React.SetStateAction<string | null>
) => void;

export type TGetData = (value: string) => Promise<void>;

export type TChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type TFormEvent = (event: React.FormEvent<HTMLFormElement>) => void;

export type TButton = HTMLButtonElement;
export type TInput = HTMLInputElement;
export type TDispatchSettings = Dispatch<SettingsAction>;
