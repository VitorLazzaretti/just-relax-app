import React from 'react';
import { Container, UserImage } from './style';
import { useNavigation } from '@react-navigation/native';

const HeaderRight: React.FC = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile');
  }

  return (
    <Container onTouchStart={goToProfile} style={{ paddingRight: 20, paddingBottom: 12 }}>
      <UserImage source={require("../../assets/placeholder.png")} />
    </Container>
  )
}

export default HeaderRight;