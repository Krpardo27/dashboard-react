import { createContext, useState } from "react";

const DarkModeContext = createContext();

const ModoDarkProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(false);

  const handleClickDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider 
      value={
        { darkMode, handleClickDarkMode }
        }>
      {children}
    </DarkModeContext.Provider>
  );
};

export { ModoDarkProvider };
export default DarkModeContext;
