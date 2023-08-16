import React, { useState, useContext, createContext } from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import themes from "../styles";
import { Alegreya_500Medium } from '@expo-google-fonts/alegreya';
import { AlegreyaSans_400Regular, AlegreyaSans_500Medium } from '@expo-google-fonts/alegreya-sans';
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";

type Props = {
  children: React.ReactNode;
}

type ThemeContextType = {
  toggleTheme: () => void;
  theme: typeof themes.light;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
}

export const Theme: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const [fontsLoaded] = useFonts({
    Alegreya_500Medium,
    AlegreyaSans_400Regular,
    AlegreyaSans_500Medium
  });

  if (!fontsLoaded) return (
    <View>
      <Text>Loading...</Text>
    </View>
  );

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme: toggleTheme, theme: theme }}>
      <ThemeProvider theme={theme}>
        <StatusBar style={theme.title === "light" ? "dark" : "light"} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
