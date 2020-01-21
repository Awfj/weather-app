import { useReducer, Reducer } from "react";
import reduceFetch, { State, Action } from "../reducers/reduceFetch";

function useFetch<T>() {
  return useReducer<Reducer<State<T>, Action<T>>>(reduceFetch, {
    data: null,
    isLoading: false,
    isError: false
  });
}

export default useFetch;
