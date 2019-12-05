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
