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
  visibility: number;
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
  visibility: number;
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

export type ISettings = {
  favorites: string[];
  isDrawerOpen: boolean;
  isThemeDark: boolean;
  lastLocation: string | null;
};

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
