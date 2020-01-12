import { useEffect, Dispatch, useCallback } from "react";
import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SET_LAST_LOCATION
} from "../actions";
import useFetch from "./useFetch";
import { getLaunchLocation } from "../utils";
import { Action as SettingsAction } from "../hooks/useSettings";

const useGeoLocationApi = (dispatchSettings: Dispatch<SettingsAction>) => {
  const [state, dispatchFetch] = useFetch<string>();
  // console.log(state)

  const setLocations = useCallback(
    (launchLocation: string) => {
      dispatchSettings({
        type: SET_LAST_LOCATION,
        lastLocation: launchLocation
      });
      dispatchFetch({ type: FETCH_SUCCESS, data: launchLocation });
    },
    [dispatchFetch, dispatchSettings]
  );

  useEffect(() => {
    (async () => {
      let launchLocation = localStorage.getItem("launch_location");
      if (launchLocation) {
        setLocations(launchLocation);
      } else {
        dispatchFetch({ type: FETCH_INIT });
        launchLocation = await getLaunchLocation();
        if (launchLocation) {
          setLocations(launchLocation);
        } else {
          dispatchFetch({ type: FETCH_FAILURE });
        }
      }
    })();
  }, [dispatchFetch, setLocations]);
  return [state, dispatchFetch] as const;
};

export default useGeoLocationApi;
