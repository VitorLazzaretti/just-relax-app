import React from 'react'
import {
  Container,
  MoodImageContainer,
  MoodName
} from './styles';

type MoodProps = {
  mood: string;
  MoodSvg: React.FC;
}

const Mood: React.FC<MoodProps> = ({ mood, MoodSvg }) => {
  return (
    <Container>
      <MoodImageContainer>
        <MoodSvg />
      </MoodImageContainer>
      <MoodName> {mood} </MoodName>
    </Container>
  )
}

export default Mood;