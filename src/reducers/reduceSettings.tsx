import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TURN_ON_DARK_THEME,
  TURN_OFF_DARK_THEME,
  SET_LAST_LOCATION,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SWITCH_TO_CELSIUS,
  SWITCH_TO_FAHRENHEIT
} from "../actions";
import { ISettings } from "../types";

export type Action =
  | { type: OPEN_DRAWER }
  | { type: CLOSE_DRAWER }
  | { type: TURN_ON_DARK_THEME }
  | { type: TURN_OFF_DARK_THEME }
  | { type: SWITCH_TO_CELSIUS }
  | { type: SWITCH_TO_FAHRENHEIT }
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
    case TURN_ON_DARK_THEME: {
      return {
        ...state,
        isThemeDark: true
      };
    }
    case TURN_OFF_DARK_THEME: {
      return {
        ...state,
        isThemeDark: false
      };
    }
    case SWITCH_TO_CELSIUS: {
      return {
        ...state,
        temperatureScale: "celsius"
      };
    }
    case SWITCH_TO_FAHRENHEIT: {
      return {
        ...state,
        temperatureScale: "fahrenheit"
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
