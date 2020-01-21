import { useTheme } from "@material-ui/core/styles";
import useWindowWidth from "../hooks/useWindowWidth";

const useBreakpoints = () => {
  const breakpoints = useTheme().breakpoints.values;
  const windowWidth = useWindowWidth();
  return [breakpoints, windowWidth] as const;
};

export default useBreakpoints;
