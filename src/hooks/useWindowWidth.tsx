import { useContext } from "react";
import { WindowWidthContext } from "../providers/WindowWidthProvider";

const useWindowWidth = () => useContext(WindowWidthContext);

export default useWindowWidth;
