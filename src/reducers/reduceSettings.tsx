import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_THEME,
  SET_LAST_LOCATION,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "../actions";
import { ISettings } from "../types";
import { LOCAL_STORAGE } from "../constants";

export type Action =
  | { type: OPEN_DRAWER }
  | { type: CLOSE_DRAWER }
  | { type: TOGGLE_THEME }
  | { type: SET_LAST_LOCATION; lastLocation: string }
  | { type: ADD_TO_FAVORITES; location: string }
  | { type: REMOVE_FROM_FAVORITES; location: string };

function reduceSettings(state: ISettings, action: Action): ISettings {
  switch (action.type) {
    case OPEN_DRAWER: {
      return {
        ...state,
        isDrawerOpen: true
      };
    }
    case CLOSE_DRAWER: {
      return {
        ...state,
        isDrawerOpen: false
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
        favorites: [
          ...state.favorites.filter(location => action.location !== location)
        ]
      };
    }
    default: {
      return state;
    }
  }
}

export default reduceSettings;
