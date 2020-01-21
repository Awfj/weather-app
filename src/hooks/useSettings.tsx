import { useContext } from "react";
import {
  SettingsContext,
  SettingsDispatchContext
} from "../providers/SettingsProvider";

const useSettings = () => {
  const settings = useContext(SettingsContext);
  const dispatch = useContext(SettingsDispatchContext);
  return [settings, dispatch] as const;
};

export default useSettings;
