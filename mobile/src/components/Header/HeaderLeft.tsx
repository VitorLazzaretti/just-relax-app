import React from 'react';
import { Container } from './style';
import IconMI from '../Icon/IconMI';
import { Pressable } from 'react-native';
import { useMenuNavigation } from '../../contexts/menu';
import { useTheme } from '../../contexts/theme';

const HeaderLeft: React.FC = () => {
  const { theme } = useTheme();
  const { toggleMenu, isSideMenuOpen } = useMenuNavigation();

  return (
    <Container
      onPress={() => toggleMenu()}
      style={{
        paddingLeft: 20,
        paddingBottom: 12,
        paddingRight: 30,
        position: 'absolute',
        zIndex: 99
      }}
    >
      <Pressable
        style={{}}
        onPress={() => toggleMenu()}
      >
        <IconMI
          name={!isSideMenuOpen ? "menu" : "close"}
          size={30}
          color={theme.colors.text}
        />
      </Pressable>
    </Container>
  );
}

export default HeaderLeft;