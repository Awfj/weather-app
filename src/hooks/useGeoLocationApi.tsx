import { useEffect } from "react";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
import useFetch from "./useFetch";
import { getLaunchLocation } from "../utils";

const useGeoLocationApi = () => {
  const [state, dispatch] = useFetch<string>();

  useEffect(() => {
    (async () => {
      dispatch({ type: FETCH_INIT });
      const launchLocation = await getLaunchLocation();
      if (launchLocation) {
        dispatch({ type: FETCH_SUCCESS, data: launchLocation });
      } else {
        dispatch({ type: FETCH_FAILURE });
      }
    })();
  }, [dispatch]);
  return [state] as const;
};

export default useGeoLocationApi;
