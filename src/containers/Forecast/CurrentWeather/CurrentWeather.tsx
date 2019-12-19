import React from "react";
import styles from "./CurrentWeather.module.scss";
import { ICurrentWeather } from "../../../types";

interface Props {
  data: ICurrentWeather;
  Timer: React.ReactNode;
}

const CurrentWeather = ({ data, Timer }: Props) => {
  const { city, condition, country, temperature } = data;

  return (
    <section className={styles.root}>
      <h2>
        {city}, {country}
      </h2>
      <p className={styles.temperature}>{temperature}</p>
      <p className={styles.condition}>{condition}</p>
      {Timer}
    </section>
  );
};

export default CurrentWeather;
