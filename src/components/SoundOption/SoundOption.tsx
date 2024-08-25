import React from 'react';
import {
  Container,
  SoundListening,
  SoundDuration,
  SoundImage,
  SoundInfoContainer,
  SoundTitle
} from './styles';

import { ImageSourcePropType } from 'react-native';

export type SoundOptionProps = {
  title: string;
  listening: string;
  image: ImageSourcePropType;
  duration: number;
  onPress: () => void;
}

const SoundOption: React.FC<SoundOptionProps> = ({ listening, duration, image, onPress, title }) => {
  const minutesToLabel = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`;
    } else {
      const hours = Math.floor(minutes / 60);
      const minutesLeft = minutes % 60;
      return `${hours}h ${minutesLeft}min`;
    }
  }

  return (
    <Container onPress={onPress}>
      <SoundImage source={image} />
      <SoundInfoContainer>
        <SoundTitle> {title} </SoundTitle>
        <SoundListening> {listening} </SoundListening>
      </SoundInfoContainer>
      <SoundDuration> {minutesToLabel(duration)} </SoundDuration>
    </Container>
  )
}

export default SoundOption;