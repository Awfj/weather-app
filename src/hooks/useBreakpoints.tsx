import { useTheme } from "@material-ui/core/styles";
import useWindowWidth from "../hooks/useWindowWidth";

const useBreakpoints = (breakpoint: "xs" | "sm" | "md" | "lg" | "xl") => {
  const breakpoints = useTheme().breakpoints.values;
  const windowWidth = useWindowWidth();
  const doesUIFit = windowWidth >= breakpoints[breakpoint];
  return doesUIFit;
};

export default useBreakpoints;
