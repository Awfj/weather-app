import { useCallback } from "react";
import { TOGGLE_DRAWER, OPEN_DRAWER, CLOSE_DRAWER } from "../actions";
import useBreakpoints from "../hooks/useBreakpoints";
import useSettings from "../hooks/useSettings";

const useDrawer = () => {
  const doesDrawerFit = useBreakpoints("sm");
  const [{ isDrawerOpen }, dispatch] = useSettings();

  const openDrawer = useCallback(() => {
    dispatch({ type: OPEN_DRAWER });
  }, [dispatch]);

  const closeDrawer = useCallback(() => {
    dispatch({ type: CLOSE_DRAWER });
  }, [dispatch]);

  const toggleDrawer = useCallback(() => {
    isDrawerOpen ? closeDrawer() : openDrawer();
  }, [isDrawerOpen, openDrawer, closeDrawer]);

  return { doesDrawerFit, isDrawerOpen, toggleDrawer, openDrawer, closeDrawer };
};

export default useDrawer;
