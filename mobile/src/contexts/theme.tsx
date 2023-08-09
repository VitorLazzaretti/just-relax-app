import React, { useState, useContext, createContext } from "react";
import { ThemeProvider } from "styled-components/native";
import themes from "../styles";

type Props = {
  children: React.ReactNode;
}

type ThemeContextType = {
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
}

export const Theme: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme: toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
