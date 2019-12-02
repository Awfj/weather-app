import React from "react";

interface Props {
  currentWeather: {
    city: string;
    condition: string;
    temperature: string;
  };
}

const CurrentWeather = ({ currentWeather }: Props) => {
  const { city, condition, temperature } = currentWeather;

  return (
    <div>
      {city && (
        <>
          <h2>{city}</h2>
          <p>{temperature}</p>
          <p>{condition}</p>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
