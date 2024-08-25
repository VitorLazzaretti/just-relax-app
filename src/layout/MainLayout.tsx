import React from 'react';
import { View } from 'react-native';
import SideMenu from '../components/SideMenu/SideMenu';

type MainLayoutProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <View style={{ flex: 1 }}>
      {children}
      <SideMenu />
    </View>
  )
}

export default MainLayout;