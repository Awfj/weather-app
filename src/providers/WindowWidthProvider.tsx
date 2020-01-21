import React, { useState, useEffect, createContext } from "react";

type Props = {
  children: React.ReactNode;
};

export const WindowWidthContext = createContext(0);

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
