import { useCallback } from "react";
import { OPEN_DRAWER, CLOSE_DRAWER } from "../actions";
import useBreakpoints from "../hooks/useBreakpoints";
import useSettings from "../hooks/useSettings";
import { LOCAL_STORAGE, DRAWER_BREAKPOINT } from "../constants";

const useDrawer = () => {
  const doesDrawerFit = useBreakpoints(DRAWER_BREAKPOINT);
  const [{ isDrawerOpen }, dispatch] = useSettings();

  const openDrawer = useCallback(() => {
    dispatch({ type: OPEN_DRAWER });
  }, [dispatch]);

  const closeDrawer = useCallback(() => {
    dispatch({ type: CLOSE_DRAWER });
  }, [dispatch]);

  const toggleDrawer = useCallback(() => {
    if (doesDrawerFit) {
      localStorage.setItem(LOCAL_STORAGE.isDrawerOpen, String(!isDrawerOpen));
    }
    isDrawerOpen ? closeDrawer() : openDrawer();
  }, [isDrawerOpen, doesDrawerFit, openDrawer, closeDrawer]);

  const adjustDrawer = useCallback(
    (isDrawerOpen: boolean) => {
      isDrawerOpen ? openDrawer() : closeDrawer();
    },
    [openDrawer, closeDrawer]
  );

  return {
    doesDrawerFit,
    isDrawerOpen,
    adjustDrawer,
    toggleDrawer,
    openDrawer,
    closeDrawer
  };
};

export default useDrawer;
