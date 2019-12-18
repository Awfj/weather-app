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

export interface ICurrentWeatherResponse {
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

export interface IGeoLocationResponse {
  city: string;
}

export type TSetString = (value: React.SetStateAction<string>) => void;
export type TSetBoolean = (value: React.SetStateAction<boolean>) => void;
export type TSetStringOrNull = (
  value: React.SetStateAction<string | null>
) => void;

export type TGetForecast = (location: string) => Promise<void>;
