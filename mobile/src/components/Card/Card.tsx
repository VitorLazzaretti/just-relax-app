import React from 'react'
import { Container, LeftContent, RightContent, Title, CardImage, Description, Button, ButtonText } from './styles';
import IconMI from '../Icon/IconMI';
import { ImageSourcePropType } from 'react-native';
import { useTheme } from '../../contexts/theme';

type CardProps = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  onPress: () => void;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, buttonText, description, image, onPress }) => {
  const { theme } = useTheme();
  const color = theme.title == 'dark' ? theme.colors.text : theme.colors.icon;

  return (
    <Container>
      <LeftContent>
        <Title> {title} </Title>
        <Description> {description} </Description>
        <Button onPress={onPress} activeOpacity={0.4}>
          <ButtonText>
            {buttonText}
          </ButtonText>
          <IconMI color={color} style={{ marginTop: 2 }} name='play-circle-filled' size={18} />
        </Button>
      </LeftContent>
      <RightContent>
        <CardImage source={image} />
      </RightContent>
    </Container>
  )
}

export default Card;