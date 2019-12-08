import {
  FETCH_INIT,
  FETCH_FAILURE,
  FETCH_SUCCESS
} from "../actions/actionTypes";
import { ICurrentWeather } from "../types";

type State = {
  currentWeather: ICurrentWeather | null;
  errorMessage: string | null;
  isLoading: boolean;
};

type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; currentWeather: ICurrentWeather }
  | { type: "FETCH_FAILURE"; errorMessage: string };

export const fetchData = (state: State, action: Action) => {
  switch (action.type) {
    case FETCH_INIT: {
      return {
        ...state,
        currentWeather: null,
        errorMessage: null,
        isLoading: true
      };
    }
    case FETCH_SUCCESS: {
      const { currentWeather } = action;
      return {
        ...state,
        currentWeather,
        errorMessage: null,
        isLoading: false
      };
    }
    case FETCH_FAILURE: {
      const { errorMessage } = action;
      return {
        ...state,
        currentWeather: null,
        errorMessage,
        isLoading: false
      };
    }
  }
};
