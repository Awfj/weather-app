import React from "react";
import Spinner from "../Spinner/Spinner";

type Props = {
  children: React.ReactNode;
  error: string;
  isLoading: boolean;
  isError: boolean;
};

const DataLoader = ({ children, error, isLoading, isError }: Props) => {
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
};

export default DataLoader;
