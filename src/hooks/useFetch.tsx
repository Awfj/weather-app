import { useReducer, Reducer } from "react";
import { FETCH_INIT, FETCH_FAILURE, FETCH_SUCCESS } from "../actions";

export type State<T> = {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
};

export type Action<T> =
  | { type: FETCH_INIT }
  | { type: FETCH_SUCCESS; data: T }
  | { type: FETCH_FAILURE };

function useFetch<T>() {
  return useReducer<Reducer<State<T>, Action<T>>>(reducer, {
    data: null,
    isLoading: false,
    isError: false
  });
}

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case FETCH_INIT: {
      return {
        ...state,
        isLoading: true,
        isError: false
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
        isLoading: false,
        isError: true
      };
    }
    default: {
      return state;
    }
  }
}

export default useFetch;