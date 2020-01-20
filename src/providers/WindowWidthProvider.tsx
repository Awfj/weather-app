import React, { useContext, useState, useEffect, createContext } from "react";

type Props = {
  children: React.ReactNode;
};

const WindowWidthContext = createContext(0);
export const useWindowWidth = () => useContext(WindowWidthContext);

const WindowWidthProvider = ({ children }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={width}>
      {children}
    </WindowWidthContext.Provider>
  );
};

export default WindowWidthProvider;
