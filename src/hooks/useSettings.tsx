import { useReducer, useEffect } from "react";
import { TOGGLE_DRAWER, SET_LAST_LOCATION } from "../actions";

export type State = {
  isDrawerOpen: boolean;
  lastLocation: string | null;
};

export type Action =
  | { type: TOGGLE_DRAWER }
  | { type: SET_LAST_LOCATION; lastLocation: string };

const useSettings = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDrawerOpen: false,
    lastLocation: null
  });

  const { isDrawerOpen } = state;

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
  }, [isDrawerOpen]);

  return [state, dispatch] as const;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      };
    }
    case SET_LAST_LOCATION: {
      return {
        ...state,
        lastLocation: action.lastLocation
      };
    }
    default: {
      return state;
    }
  }
}

export default useSettings;
