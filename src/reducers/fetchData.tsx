import {
  FETCH_INIT,
  FETCH_FAILURE,
  FETCH_SUCCESS
} from "../actions/actionTypes";
import { ICurrentWeather } from "../types";

type State = {
  currentWeather: ICurrentWeather | null;
  isLoading: boolean;
};

type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; currentWeather: ICurrentWeather }
  | { type: "FETCH_FAILURE" };

const fetchData = (state: State, action: Action) => {
  switch (action.type) {
    case FETCH_INIT: {
      return {
        ...state,
        currentWeather: null,
        isLoading: true
      };
    }
    case FETCH_SUCCESS: {
      const { currentWeather } = action;
      return {
        ...state,
        currentWeather,
        isLoading: false
      };
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        currentWeather: null,
        isLoading: false
      };
    }
  }
};

export default fetchData;
