import React from "react";

import Home from "../pages/Home/Home";
import SelectSound from "../pages/SelectSound/SelectSound";
import PlaySound from "../pages/PlaySound/PlaySound";
import GratitudeCalendar from "../pages/GratitudeCalendar/GratitudeCalendar";
import JournalDocument from "../pages/JournalDocument/JournalDocument";
import Profile from "../pages/Profile/Profile";
import PersonalInsights from "../pages/PersonalInsights/PersonalInsights";

import { createStackNavigator } from '@react-navigation/stack';

import HeaderCenter from "../components/Header/HeaderCenter";
import HeaderRight from "../components/Header/HeaderRight";
import HeaderLeft from "../components/Header/HeaderLeft";

import { useTheme } from "../contexts/theme";
import { AppRootParamList } from "../types/routes";

const AppStack = createStackNavigator<AppRootParamList>();

const AppRoutes: React.FC = () => {
  const { theme } = useTheme();

  return (
    <AppStack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderCenter />,
        headerRight: () => <HeaderRight />,
        headerLeft: () => <HeaderLeft />,
        headerStyle: {
          backgroundColor: theme.colors.background,
          height: 108
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTintColor: theme.colors.primary,
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="SelectSound" component={SelectSound} />
      <AppStack.Screen name="PlaySound" component={PlaySound} />
      <AppStack.Screen name="GratitudeCalendar" component={GratitudeCalendar} />
      <AppStack.Screen name="JournalDocument" component={JournalDocument} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="PersonalInsights" component={PersonalInsights} />
    </AppStack.Navigator>
  )
};

export default AppRoutes;
