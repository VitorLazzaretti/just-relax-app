import React from 'react'
import {
  Container,
  MoodImageContainer,
  MoodName
} from './styles';
import { useTheme } from '../../contexts/theme';

type MoodProps = {
  mood: string;
  MoodSvg: React.FC;
  onPress: () => void;
  selected?: boolean;
  moodList?: string[];
}

const Mood: React.FC<MoodProps> = ({ mood, MoodSvg, onPress, selected, moodList }) => {
  const { theme } = useTheme();

  const getColor = () => {
    if (theme.title === "light") {
      return selected ? theme.colors.primary : theme.colors.secondary;
    } else {
      if (moodList.length === 0) {
        return theme.colors.primary;
      }

      return selected ? theme.colors.primary : theme.colors.secondary;
    }
  }

  return (
    <Container>
      <MoodImageContainer
        style={{
          backgroundColor: getColor(),
        }}
        onPress={onPress}
      >
        <MoodSvg />
      </MoodImageContainer>
      <MoodName> {mood} </MoodName>
    </Container>
  )
}

export default Mood;