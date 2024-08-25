import React, { useEffect, useRef, useState } from "react"
import Slider from '@react-native-community/slider';

import {
  Container,
  GenericButton,
  MediaControllerContainer,
  MeditationDescription,
  MeditationImage,
  MeditationTitle,
  PlayButton,
  SoundBarContainer,
} from "./styles";

import { AppRootParamList } from "../../types/routes";
import { meditationSounds } from "../../constants/meditationSounds";
import { useTheme } from "../../contexts/theme";

import IconMI from "../../components/Icon/IconMI";

import type { StackScreenProps } from "@react-navigation/stack";
import MainLayout from "../../layout/MainLayout";
import { Audio, AVPlaybackStatus } from "expo-av";
import { Text } from "react-native";

type Props = StackScreenProps<AppRootParamList, "PlaySound">;

const PlaySound: React.FC<Props> = ({ navigation, route }) => {
  const [currentMeditation, setCurrentMeditation] = useState(meditationSounds.find(meditation => meditation.id === Number(route.params?.meditationId)));
  const [paused, setPaused] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [position, setPosition] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const progress = useRef(setInterval(() => { }, 1000));

  const { theme } = useTheme();

  const formatSeconds = (seconds: number) => {
    // 00:00 format

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
        setSound(undefined);
      }
    }
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    setDuration(0);
    setPosition(0);
    setPaused(true);

    if (currentMeditation) {
      console.log("loading");

      Audio.Sound.createAsync(currentMeditation.sound)
        .then(({ sound }) => {
          setSound(sound);
          console.log(sound);
          setIsLoaded(true);

          console.log("loaded");
        });
    }
  }, [currentMeditation])

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
        console.log(status);

        if (status.isLoaded) {
          setPaused(!status.isPlaying);
          setPosition(status.positionMillis);
          setDuration(status.durationMillis || 0);
        } else {
          console.error("Playback status error:", status);
        }
      });
    }

    return () => {
      if (sound) {
        sound.unloadAsync();
        setSound(undefined);
      }
    }
  }, [sound]);

  useEffect(() => {
    if (paused) {
      clearInterval(progress.current);
    } else {
      progress.current = setInterval(() => {
        setPosition(prev => prev + 1000);
      }, 1000);
    }

    return () => {
      clearInterval(progress.current);
    }  
  }, [paused, position]);

  if (!currentMeditation) {
    navigation.navigate("SelectSound");
    return null;
  }

  const nextMeditation = async () => {
    await sound?.unloadAsync();
    setSound(undefined);


    const nextMeditation = meditationSounds.find(meditation => meditation.id === currentMeditation?.id + 1);
    if (nextMeditation) {
      setCurrentMeditation({ ...nextMeditation });
    } else {
      setCurrentMeditation({ ...meditationSounds[0] });
    }
  }

  const previousMeditation = async (mode?: "RANDOM" | unknown) => {
    await sound?.unloadAsync();
    setSound(undefined);

    if (mode === "RANDOM") {
      const randomMeditation = meditationSounds[Math.floor(Math.random() * meditationSounds.length)];
      setCurrentMeditation({ ...randomMeditation });
      return;
    }
    const previousMeditation = meditationSounds.find(meditation => meditation.id === currentMeditation?.id - 1);
    if (previousMeditation) {
      setCurrentMeditation({ ...previousMeditation });
    } else {
      setCurrentMeditation({ ...meditationSounds[meditationSounds.length - 1] });
    }
  }

  const pauseSound = async () => {
    try {
      if (!sound) return;

      await sound.setStatusAsync({
        shouldPlay: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  const playSound = async () => {
    try {
      if (!sound) return;

      if (paused) {
        await sound.playAsync();
      } else {
        await sound.setStatusAsync({
          shouldPlay: false
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MainLayout>
      <Container>
        <MeditationImage source={currentMeditation.image} />
        <MeditationTitle> {currentMeditation.title} </MeditationTitle>
        <MeditationDescription> By: {currentMeditation?.author || "Unknown"} </MeditationDescription>

        <SoundBarContainer>
          <Slider
            value={position}
            minimumValue={0}
            maximumValue={duration}
            onSlidingStart={() => {
              clearInterval(progress.current);
              pauseSound();
            }}
            onSlidingComplete={async (value) => {
              if (sound) {
                await sound.setPositionAsync(value);
                playSound();
              }
            }}
            minimumTrackTintColor={theme.colors.primary}
            maximumTrackTintColor={theme.colors.tertiary_text}
            thumbTintColor={theme.colors.primary}
            style={{ width: "100%" }}
          />
          <Text>{formatSeconds(position / 1000)} / {formatSeconds(duration / 1000)}</Text>
        </SoundBarContainer>

        <MediaControllerContainer>
          <GenericButton onPress={() => {
            previousMeditation("RANDOM");
          }}>
            <IconMI name="shuffle" size={20} color={theme.colors.tertiary_text + "CC"} />
          </GenericButton>
          <GenericButton onPress={previousMeditation}>
            <IconMI name="fast-rewind" size={24} color={theme.colors.tertiary_text + "CC"} />
          </GenericButton>
          <PlayButton onPress={() => {
            playSound();
          }}>
            {isLoaded ?
              <IconMI name={paused ? "play-arrow" : "pause"} size={32} color={theme.colors.icon} /> :
              <IconMI name="sync" size={32} color={theme.colors.icon} />
            }

          </PlayButton>
          <GenericButton onPress={nextMeditation}>
            <IconMI name="fast-forward" size={24} color={theme.colors.tertiary_text + "CC"} />
          </GenericButton>
          <GenericButton>
            <IconMI name="repeat" size={20} color={theme.colors.tertiary_text + "CC"} />
          </GenericButton>
        </MediaControllerContainer>
      </Container>
    </MainLayout>
  )
}

export default PlaySound;
