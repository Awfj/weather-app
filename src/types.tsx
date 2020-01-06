import { Dispatch } from "react";
import { Action as SettingsAction } from "./hooks/useSettings";

export interface IForecast {
  currentWeather: ICurrentWeather;
  requestTime: number;
}

export interface ICurrentWeather {
  city: string;
  country: string;
  condition: string;
  temperature: string;
}

export interface ICurrentWeatherData {
  main: {
    temp: number;
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
}

export interface IGeoLocationData {
  city: string;
}

export type ISettings = {
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

export type TButton = HTMLButtonElement;
export type TInput = HTMLInputElement;
export type TDispatchSettings = Dispatch<SettingsAction>;
