import * as React from "react";
import { Image } from "react-native";
import { useTheme } from "../../../contexts/theme";

const Anxious = () => {
  const { theme } = useTheme();

  return theme.title == 'light' ?
    <Image source={require('./Anxious-Light.png')} />
    :
    <Image source={require('./Anxious-Dark.png')} />
};

export default Anxious;
