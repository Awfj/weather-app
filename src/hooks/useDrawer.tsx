import { useEffect } from "react";

import { TOGGLE_DRAWER } from "../actions";
import { TDispatchSettings } from "../types";

const useDrawer = (dispatch: TDispatchSettings, isDrawerOpen: boolean) => {
  useEffect(() => {
    const storedDrawerState = localStorage.getItem("is_drawer_open");
    if (storedDrawerState) {
      const settings: boolean = JSON.parse(storedDrawerState);
      if (settings !== isDrawerOpen) {
        dispatch({ type: TOGGLE_DRAWER });
      }
    } else {
      localStorage.setItem("is_drawer_open", JSON.stringify(isDrawerOpen));
    }
  }, [dispatch, isDrawerOpen]);
};

export default useDrawer;
