import { useTheme } from "@material-ui/core/styles";
import useWindowWidth from "../hooks/useWindowWidth";

const useBreakpoints = (breakpoint: "xs" | "sm" | "md" | "lg" | "xl") => {
  const breakpoints = useTheme().breakpoints.values;
  const windowWidth = useWindowWidth();
  const isUIFit = windowWidth >= breakpoints[breakpoint];
  return isUIFit;
};

export default useBreakpoints;
