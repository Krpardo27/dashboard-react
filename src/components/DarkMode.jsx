import React, { useContext, useState } from "react";
import DarkModeContext from "../context/ModoDarkProvider";

const DarkMode = () => {
  const { darkMode, handleClickDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={handleClickDarkMode}
      className="w-10 h-10 bg-neutral-700 dark:bg-white rounded-full text-white dark:text-black"
    >
      {darkMode ? "LGH" : "DRK"}
    </button>
  );
};

export default DarkMode;
