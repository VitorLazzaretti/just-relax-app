import React, { useEffect, useState } from "react"

import {
  Container,
  GenericButton,
  MediaControllerContainer,
  MeditationDescription,
  MeditationImage,
  MeditationTitle,
  PlayButton,
  SoundBarContainer,
  SoundBarProgress
} from "./styles";

import { AppRootParamList } from "../../types/routes";
import { meditationSounds } from "../../constants/meditationSounds";
import { useTheme } from "../../contexts/theme";

import IconMI from "../../components/Icon/IconMI";

import type { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<AppRootParamList, "PlaySound">;

const PlaySound: React.FC<Props> = ({ navigation, route }) => {
  const [currentMeditation, setCurrentMeditation] = useState(meditationSounds.find(meditation => meditation.id === Number(route.params?.meditationId)));
  const [paused, setPaused] = useState<boolean>(false);

  const { theme } = useTheme();

  useEffect(() => {
  }, [currentMeditation]);

  if (!currentMeditation) {
    navigation.navigate("SelectSound");
    return;
  }

  const nextMeditation = () => {
    const nextMeditation = meditationSounds.find(meditation => meditation.id === currentMeditation?.id + 1);
    if (nextMeditation) {
      setCurrentMeditation({...nextMeditation});
    } else {
      setCurrentMeditation({...meditationSounds[0]});
    }
  }

  const previousMeditation = () => {
    const previousMeditation = meditationSounds.find(meditation => meditation.id === currentMeditation?.id - 1);
    if (previousMeditation) {
      setCurrentMeditation({...previousMeditation});
    } else {
      setCurrentMeditation({...meditationSounds[meditationSounds.length - 1]});
    }
  }

  return (
    <Container>
      <MeditationImage source={currentMeditation.image} />
      <MeditationTitle> {currentMeditation.title} </MeditationTitle>
      <MeditationDescription> By: {currentMeditation?.author || "Unknown"} </MeditationDescription>

      <SoundBarContainer>
        <SoundBarProgress source={require("../../assets/soundbar-placeholder.png")} />
      </SoundBarContainer>

      <MediaControllerContainer>
        <GenericButton>
          <IconMI name="shuffle" size={20} color={theme.colors.tertiary_text + "CC"} />
        </GenericButton>
        <GenericButton onPress={previousMeditation}>
          <IconMI name="fast-rewind" size={24} color={theme.colors.tertiary_text + "CC"} />
        </GenericButton>
        <PlayButton onPress={() => setPaused(state => !state)}>
          <IconMI name={paused ? "pause" : "play-arrow"} size={32} color={theme.colors.icon} />
        </PlayButton>
        <GenericButton onPress={nextMeditation}>
          <IconMI name="fast-forward" size={24} color={theme.colors.tertiary_text + "CC"} />
        </GenericButton>
        <GenericButton>
          <IconMI name="repeat" size={20} color={theme.colors.tertiary_text + "CC"} />
        </GenericButton>
      </MediaControllerContainer>
    </Container>
  )
}

export default PlaySound;