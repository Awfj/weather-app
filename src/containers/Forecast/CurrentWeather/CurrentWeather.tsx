import React from "react";
import styles from "./CurrentWeather.module.scss";

interface Props {
  data: {
    city: string;
    condition: string;
    temperature: string;
  };
}

const CurrentWeather = ({ data }: Props) => {
  const { city, condition, temperature } = data;

  return (
    <section className={styles.root}>
      {city && (
        <>
          <h2>{city}</h2>
          <p className={styles.temperature}>{temperature}</p>
          <p className={styles.condition}>{condition}</p>
        </>
      )}
    </section>
  );
};

export default CurrentWeather;
