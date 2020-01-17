import React, { useState } from "react";
import Refresh from "../components/Refresh/Refresh";

const useRefresh = (isDataFetched: boolean, onClick: () => void) => {
  const [refreshIsDisabled, setRefreshIsDisabled] = useState(true);
  const refresh = <Refresh onClick={onClick} disabled={refreshIsDisabled} />;
  if (isDataFetched) {
    return [setRefreshIsDisabled, refresh] as const;
  } else {
    return [setRefreshIsDisabled] as const;
  }
};

export default useRefresh;
