import React from 'react'
import Card from '../Card/Card';
import { Container } from './styles';
import { useTheme } from '../../contexts/theme';
import { useNavigation } from '@react-navigation/native'

const CardArea = () => {
  const { toggleTheme } = useTheme();
  const navigation = useNavigation();

  const cards = [
    {
      title: 'Meditation 101',
      description: 'Meditation: Path to Tranquility and Balance',
      image: require('../../assets/home/card-meditation.png'),
      buttonText: 'relax now',
      onPress: () => { navigation.navigate('SelectSound') }
    },
    {
      title: 'Gratitude Writing',
      description: 'Nurture a Positive Outlook Through Daily Reflection',
      image: require('../../assets/home/card-writing.png'),
      buttonText: 'write now',
      onPress: () => { toggleTheme() }
    },
    {
      title: 'Personal Insights',
      description: 'Discover Patterns, Understand Your Progress',
      image: require('../../assets/home/card-insights.png'),
      buttonText: 'analyze now',
      onPress: () => { toggleTheme() }
    },
  ]

  return (
    <Container>
      {cards.map((card) => (
        <Card {...card} key={card.title} />
      ))}
    </Container>
  )
}

export default CardArea;