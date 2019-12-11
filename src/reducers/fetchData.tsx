import {
  FETCH_INIT,
  FETCH_FAILURE,
  FETCH_SUCCESS
} from "../actions/actionTypes";
import { ICurrentWeather } from "../types";

type State = {
  data: ICurrentWeather | string | null;
  isLoading: boolean;
};

type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; data: ICurrentWeather | string }
  | { type: "FETCH_FAILURE" };

function fetchData(state: State, action: Action): State {
  switch (action.type) {
    case FETCH_INIT: {
      return {
        ...state,
        data: null,
        isLoading: true
      };
    }
    case FETCH_SUCCESS: {
      const { data } = action;
      return {
        ...state,
        data,
        isLoading: false
      };
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        data: null,
        isLoading: false
      };
    }
  }
}

export default fetchData;
