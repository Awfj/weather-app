import React from "react";
import styles from "./Forecast.module.scss";

type Props = {
  CurrentWeather: React.ReactNode;
};

const Forecast = ({ CurrentWeather }: Props) => {
  return <div className={styles.root}>{CurrentWeather}</div>;
};

export default Forecast;
