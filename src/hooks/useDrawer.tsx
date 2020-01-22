import { useCallback } from "react";
import { TOGGLE_DRAWER, CLOSE_DRAWER } from "../actions";
import useBreakpoints from "../hooks/useBreakpoints";
import useSettings from "../hooks/useSettings";

const useDrawer = () => {
  const doesDrawerFit = useBreakpoints("sm");
  const [{ isDrawerOpen }, dispatch] = useSettings();

  const toggleDrawer = useCallback(() => {
    dispatch({ type: TOGGLE_DRAWER });
  }, [dispatch]);

  const closeDrawer = useCallback(() => {
    dispatch({ type: CLOSE_DRAWER });
  }, [dispatch]);

  return { doesDrawerFit, isDrawerOpen, toggleDrawer, closeDrawer };
};

export default useDrawer;
