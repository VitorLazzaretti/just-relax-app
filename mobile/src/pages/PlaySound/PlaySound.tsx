import React, { useEffect } from "react"
import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppRootParamList } from "../../types/routes";
import { meditationSounds } from "../../constants/meditationSounds";

type Props = NativeStackScreenProps<AppRootParamList, "PlaySound">;

const PlaySound: React.FC<Props> = ({ navigation, route }) => {
  useEffect(() => {
    if (!route.params?.meditationId || !meditationSounds.find((sound) => sound.id === route.params?.meditationId)) {
      navigation.navigate("SelectSound");
    };
  }, []);

  return (
    <View>
      <Text>Text</Text>
    </View>
  )
}

export default PlaySound;