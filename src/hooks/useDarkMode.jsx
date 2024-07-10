import { useContext } from "react";
import DarkModeContext from "../context/ModoDarkProvider";

const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export default useDarkMode;
