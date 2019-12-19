import React from "react";

type Props = {
  themeToggle: React.ReactNode;
  refresh: React.ReactNode;
};

const Toolbar = ({ refresh, themeToggle }: Props) => {
  return (
    <>
      {refresh}
      {themeToggle}
    </>
  );
};

export default Toolbar;
