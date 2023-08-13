import React from 'react';
import { Container } from './styles'
import Mood from '../Mood/Mood';
import Focus from '../../assets/Svg/Mood/Focus';
import Relax from '../../assets/Svg/Mood/Relax';
import Calm from '../../assets/Svg/Mood/Calm';
import Anxious from '../../assets/Svg/Mood/Anxious';

const MoodSelector = () => {
  const moods = [
    {
      mood: 'Calm',
      MoodSvg: Calm
    },
    {
      mood: 'Relax',
      MoodSvg: Relax
    },
    {
      mood: 'Focus',
      MoodSvg: Focus
    },
    {
      mood: 'Anxious',
      MoodSvg: Anxious
    },
    {
      mood: 'Calm',
      MoodSvg: Calm
    },
    {
      mood: 'Relax',
      MoodSvg: Relax
    },
    {
      mood: 'Focus',
      MoodSvg: Focus
    },
    {
      mood: 'Anxious',
      MoodSvg: Anxious
    }
  ];

  return (
    <Container>
      {moods.map((mood, index) => {
        return (
          <Mood
            key={index}
            mood={mood.mood}
            MoodSvg={mood.MoodSvg}
          />
        )
      })}
    </Container>
  );
}

export default MoodSelector;