import React, { useState, useEffect, createContext } from "react";

export const ResponsiveLayout = createContext();

const getBreakpoint = width => {
  if (width < 575) return "xs";
  if (width < 767) return "sm";
  if (width < 991) return "md";
  if (width < 1199) return "ls";
  return "xl";
};

const useResponsiveContext = () => {
  const size = getBreakpoint(window.innerWidth);
  const [dimensions, setDimensions] = useState({
    size,
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const handleResize = () => {
      const currentSize = getBreakpoint(window.innerWidth);
      setDimensions({
        size: currentSize,
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [dimensions, setDimensions];
};

// Provider
const ResponsiveLayoutProvider = ({ children }) => {
  const [dimensions, setDimensions] = useResponsiveContext();

  return (
    <ResponsiveLayout.Provider value={{ dimensions, setDimensions }}>
      {children}
    </ResponsiveLayout.Provider>
  );
};
export default ResponsiveLayoutProvider;
