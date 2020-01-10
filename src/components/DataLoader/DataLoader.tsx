import React from "react";
import Spinner from "../Spinner/Spinner";

type Props = {
  children: React.ReactNode;
  spinnerStyles?: string;
  error: string;
  isLoading: boolean;
  isError: boolean;
};

const DataLoader = ({
  children,
  error,
  spinnerStyles,
  isLoading,
  isError
}: Props) => {
  let rendered: React.ReactNode;
  if (isLoading) {
    rendered = <Spinner className={spinnerStyles} />;
  } else {
    if (isError) {
      rendered = <p>{error}</p>;
    } else {
      rendered = children;
    }
  }

  return <>{rendered}</>;
};

export default DataLoader;
