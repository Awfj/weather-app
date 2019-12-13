import React from "react";
import Spinner from "../Spinner/Spinner";
import { State } from "../../hooks/useFetch";

type Props<T> = {
  children: React.ReactNode;
  error: string;
  lastLocation: string;
  setData: (value: T) => void;
  dataHook: (location: string) => readonly [State<T>];
};

function DataLoader<T>({
  children,
  error,
  setData,
  dataHook,
  lastLocation
}: Props<T>) {
  const [{ data, isLoading, isError }] = dataHook(lastLocation);

  React.useEffect(() => {
    if (data) setData(data);
  }, [data, setData]);
  // console.log("loader", data, isLoading, isError);

  let rendered: React.ReactNode;
  if (isLoading) {
    rendered = <Spinner />;
  } else {
    if (isError) {
      rendered = <p>{error}</p>;
    } else {
      rendered = children;
    }
  }

  return <>{rendered}</>;
}

export default DataLoader;
