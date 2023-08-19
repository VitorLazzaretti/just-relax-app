import React from 'react';
import { SafeAreaView, Pressable } from 'react-native';
import { CloseArea, Container, SideMenuContainer, Description } from './styles';
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated';
import { useMenuNavigation } from '../../contexts/menu';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
import { useTheme } from '../../contexts/theme';
import IconMI from '../Icon/IconMI';

const SideMenu = () => {
  const { closeMenu } = useMenuNavigation();
  const { signOut } = useAuth()
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigation();

  const goTo = (route: any) => {
    navigate.navigate(route);
    closeMenu();
  }

  const routes = [
    {
      title: 'Home',
      action: () => goTo('Home')
    },
    {
      title: 'Profile',
      action: () => goTo('Profile')
    },
    {
      title: 'Meditation',
      action: () => goTo('SelectSound')
    },
    {
      title: 'Gratitude Writing',
      action: () => goTo('GratitudeCalendar')
    },
    {
      title: 'Personal Insights',
      action: () => goTo('PersonalInsights')
    },
    {
      title: 'Logout',
      action: () => { closeMenu(); signOut(); }
    }
  ]

  return (
    <Container>
      <Animated.View
        entering={SlideInLeft.duration(400)}
        exiting={SlideOutLeft.duration(350)}
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',

        }}>
        <SideMenuContainer>
          <SafeAreaView style={{ gap: 24, flex: 1 }}>
            {routes.map((route, index) => (
              <Pressable style={{
                marginTop: index ? 0 : 20,
              }} key={index} onPress={route.action}>
                <Description>{route.title}</Description>
              </Pressable>
            ))}
          </SafeAreaView>
          <SafeAreaView style={{ gap: 24, flex: 1, justifyContent: "flex-end" }}>
            <Pressable onPress={toggleTheme} style={{ flexDirection: 'row', gap: 8, marginBottom: 0 }}>
              <Description> Toggle Theme </Description>
              {theme.title === "light" && (
                <IconMI name='wb-sunny' size={24} color='black' />
              )}

              {theme.title === "dark" && (
                <IconMI name='nightlight-round' size={20} color='white' />
              )}
            </Pressable>
          </SafeAreaView>
        </SideMenuContainer>
        <CloseArea onPress={() => closeMenu()} />
      </Animated.View>
    </Container>
  )
}

export default SideMenu;