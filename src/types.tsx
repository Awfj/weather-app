export interface ICurrentWeather {
  city: string;
  country: string;
  condition: string;
  temperature: string;
  requestTime?: number;
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
export type TSetStringOrNull = (
  value: React.SetStateAction<string | null>
) => void;

export type TGetWeather = (
  location: string,
  isLaunchLocation: boolean
) => Promise<void>;
