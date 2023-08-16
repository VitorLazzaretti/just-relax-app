import React from 'react';
import { Container } from './style';
import IconMI from '../Icon/IconMI';
import { useTheme } from '../../contexts/theme';
import { Pressable } from 'react-native';
import { useMenuNavigation } from '../../contexts/menu';

const HeaderLeft: React.FC = () => {
  const { theme } = useTheme();
  const { openMenu } = useMenuNavigation();

  return (
    <Container
      onPress={() => openMenu()}
      style={{ paddingLeft: 20, paddingBottom: 12, paddingRight: 30 }}
    >
      <Pressable>
        <IconMI onPress={() => openMenu()} name="menu" size={30} color={theme.title === "light" ? theme.colors.black : theme.colors.white} />
      </Pressable>
    </Container>
  )
}

export default HeaderLeft;