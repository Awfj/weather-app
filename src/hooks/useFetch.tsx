import { useReducer, Reducer } from "react";

import {
  FETCH_INIT,
  FETCH_FAILURE,
  FETCH_SUCCESS
} from "../actions";

type State<T> = {
  data: T | null;
  isLoading: boolean;
};

type Action<T> =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; data: T }
  | { type: "FETCH_FAILURE" };

function useFetch<T>() {
  return useReducer<Reducer<State<T>, Action<T>>>(fetchReducer, {
    data: null,
    isLoading: false
  });
}

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
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

export default useFetch;
