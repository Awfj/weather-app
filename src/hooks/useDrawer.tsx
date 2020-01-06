import { useEffect } from "react";

import { TOGGLE_DRAWER } from "../actions";
import { TDispatchSettings } from "../types";
import { LOCAL_STORAGE } from "../constants";

const useDrawer = (dispatch: TDispatchSettings, isDrawerOpen: boolean) => {
  useEffect(() => {
    const storedDrawer = localStorage.getItem(LOCAL_STORAGE.isDrawerOpen);
    if (storedDrawer) {
      const settings: boolean = JSON.parse(storedDrawer);
      if (settings !== isDrawerOpen) {
        dispatch({ type: TOGGLE_DRAWER });
      }
    } else {
      localStorage.setItem(LOCAL_STORAGE.isDrawerOpen, String(isDrawerOpen));
    }
  }, [dispatch, isDrawerOpen]);
};

export default useDrawer;
