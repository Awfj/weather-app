import React, { useState } from "react";
import Refresh from "../components/Refresh/Refresh";

const useRefresh = (onClick: any) => {
  const [refreshIsDisabled, setRefreshIsDisabled] = useState(true);
  const refresh = <Refresh onClick={onClick} disabled={refreshIsDisabled} />;
  return [refresh, setRefreshIsDisabled] as const;
};

export default useRefresh;
