import { useReducer } from "react";

import {
  TOGGLE_DRAWER,
  TOGGLE_THEME,
  SET_LAST_LOCATION,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "../actions";
import useTheme from "../hooks/useTheme";
import useDrawer from "../hooks/useDrawer";
import { ISettings } from "../types";
import { INITIAL_SETTINGS, LOCAL_STORAGE } from "../constants";

export type Action =
  | { type: TOGGLE_DRAWER }
  | { type: TOGGLE_THEME }
  | { type: SET_LAST_LOCATION; lastLocation: string }
  | { type: ADD_TO_FAVORITES; location: string }
  | { type: REMOVE_FROM_FAVORITES; id: number };

const useSettings = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_SETTINGS);
  const { isDrawerOpen, isThemeDark } = state;

  useTheme(dispatch, isThemeDark);
  useDrawer(dispatch, isDrawerOpen);

  return [state, dispatch] as const;
};

function reducer(state: ISettings, action: Action): ISettings {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      const { isDrawerOpen } = state;
      localStorage.setItem(LOCAL_STORAGE.isDrawerOpen, String(!isDrawerOpen));
      return {
        ...state,
        isDrawerOpen: !isDrawerOpen
      };
    }
    case TOGGLE_THEME: {
      const { isThemeDark } = state;
      localStorage.setItem(LOCAL_STORAGE.isThemeDark, String(!isThemeDark));
      return {
        ...state,
        isThemeDark: !isThemeDark
      };
    }
    case SET_LAST_LOCATION: {
      return {
        ...state,
        lastLocation: action.lastLocation
      };
    }
    case ADD_TO_FAVORITES: {
      return {
        ...state,
        favorites: [...state.favorites, action.location]
      };
    }
    case REMOVE_FROM_FAVORITES: {
      return {
        ...state,
        favorites: [...state.favorites.filter((_, id) => action.id !== id)]
      };
    }
    default: {
      return state;
    }
  }
}

export default useSettings;
