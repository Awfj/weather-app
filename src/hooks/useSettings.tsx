import { useReducer } from "react";

import { TOGGLE_DRAWER, TOGGLE_THEME, SET_LAST_LOCATION } from "../actions";
import useTheme from "../hooks/useTheme";
import useDrawer from "../hooks/useDrawer";

export type State = {
  isDrawerOpen: boolean;
  isDarkTheme: boolean;
  lastLocation: string | null;
};

export type Action =
  | { type: TOGGLE_DRAWER }
  | { type: TOGGLE_THEME }
  | { type: SET_LAST_LOCATION; lastLocation: string };

const useSettings = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDrawerOpen: false,
    isDarkTheme: false,
    lastLocation: null
  });
  const { isDrawerOpen, isDarkTheme } = state;

  useTheme(dispatch, isDarkTheme);
  useDrawer(dispatch, isDrawerOpen);

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
    case TOGGLE_THEME: {
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
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
