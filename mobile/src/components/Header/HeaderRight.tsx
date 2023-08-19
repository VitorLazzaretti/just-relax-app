import React from 'react';
import { Container, UserImage } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconMI from '../Icon/IconMI';
import { useTheme } from '../../contexts/theme';

const HeaderRight: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { theme } = useTheme();

  const goToProfile = () => {
    navigation.navigate('Profile');
  }

  return (
    <Container onTouchStart={goToProfile} style={{ paddingRight: 20, paddingBottom: 12 }}>
      {route.name === "Profile" ?
        <IconMI
          name="account-circle"
          color={theme.colors.text}
          size={30}
        /> :
        <UserImage source={require("../../assets/profile-placeholder.png")} />
      }

    </Container>
  )
}

export default HeaderRight;