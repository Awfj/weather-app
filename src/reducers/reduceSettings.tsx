import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TURN_ON_DARK_THEME,
  TURN_OFF_DARK_THEME,
  SET_LAST_LOCATION,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  CHANGE_TEMPERATURE_SCALE
} from "../actions";
import { ISettings, TTemperatureScale } from "../types";

export type Action =
  | { type: OPEN_DRAWER }
  | { type: CLOSE_DRAWER }
  | { type: TURN_ON_DARK_THEME }
  | { type: TURN_OFF_DARK_THEME }
  | {
      type: CHANGE_TEMPERATURE_SCALE;
      temperatureScale: TTemperatureScale;
    }
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
    case CHANGE_TEMPERATURE_SCALE: {
      const { temperatureScale } = action;
      return {
        ...state,
        temperatureScale
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
