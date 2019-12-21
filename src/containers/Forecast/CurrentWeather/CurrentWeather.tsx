import React from "react";
import styles from "./CurrentWeather.module.scss";
import { ICurrentWeather } from "../../../types";

interface Props {
  data: ICurrentWeather;
  timer: React.ReactNode;
}

const CurrentWeather = ({ data, timer }: Props) => {
  const { city, condition, country, temperature } = data;

  return (
    <section className={styles.root}>
      <h2>
        {city}, {country}
      </h2>
      <p className={styles.temperature}>{temperature}</p>
      <p className={styles.condition}>{condition}</p>
      {timer}
    </section>
  );
};

export default CurrentWeather;
