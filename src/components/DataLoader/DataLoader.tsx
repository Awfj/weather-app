import React from "react";
import Spinner from "../Spinner/Spinner";
import Error, { ErrorProps } from "../Error/Error";

type Props = {
  children: React.ReactNode;
  spinnerStyles?: string;
  errorMessage: string;
  isLoading: boolean;
  isError: boolean;
} & ErrorProps;

const DataLoader = ({
  children,
  spinnerStyles,
  isLoading,
  errorMessage,
  isError,
  ...other
}: Props) => {
  let rendered: React.ReactNode;
  if (isLoading) {
    rendered = <Spinner className={spinnerStyles} />;
  } else {
    if (isError) {
      rendered = <Error {...other}>{errorMessage}</Error>;
    } else {
      rendered = children;
    }
  }

  return <>{rendered}</>;
};

export default DataLoader;
