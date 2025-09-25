import { createContext, useState  } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toogleDarkMode = () => {setIsDarkMode((prevMode) => !prevMode);};

    return (
        <ThemeContext.Provider value={{ isDarkMode, toogleDarkMode }}>
        {children}
        </ThemeContext.Provider>
    );
    }