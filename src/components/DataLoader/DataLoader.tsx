import React from "react";
import Spinner from "../Spinner/Spinner";

type Props = {
  children: React.ReactNode;
  error: string;
  isDataExist: boolean;
  isLoading: boolean;
};

const DataLoader = ({ children, error, isDataExist, isLoading }: Props) => {
  return (
    <>
      {isLoading && <Spinner />}
      {children}
      {!isDataExist && !isLoading && <p>{error}</p>}
    </>
  );
};

export default DataLoader;
