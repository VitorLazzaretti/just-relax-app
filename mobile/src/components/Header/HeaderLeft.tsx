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
      <Pressable onPress={() => openMenu()}>
        <IconMI
          name="menu"
          size={30}
          color={theme.colors.text}
        />
      </Pressable>
    </Container>
  )
}

export default HeaderLeft;