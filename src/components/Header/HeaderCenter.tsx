import React from 'react';

import { Container } from './style';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../Logo/Logo';

const HeaderCenter: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container style={{ paddingBottom: 10 }}>
      <Pressable onPress={() => { navigation.navigate("Home"); }}>
        <Logo />
      </Pressable>
    </Container>
  )
}

export default HeaderCenter;