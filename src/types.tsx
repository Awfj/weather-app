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

export interface ITheme {
  contrastText: string;
  background: {
    header: string;
    search: string;
    body: string;
    sidebar?: string;
  };
}

export type TSetStringOrNull = (
  value: React.SetStateAction<string | null>
) => void;
