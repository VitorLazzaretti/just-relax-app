import React from 'react'

import AuthRoutes from './auth.router';
import { useAuth } from '../contexts/auth';
import AppRoutes from './app.router';
import { ActivityIndicator, View } from 'react-native';
import SideMenu from '../components/SideMenu/SideMenu';
import { useMenuNavigation } from '../contexts/menu';

const Router: React.FC = () => {
  const { signed, loading } = useAuth();
  const { isSideMenuOpen } = useMenuNavigation();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#555' />
      </View>
    );
  }

  return signed ? (
    <View style={{ flex: 1 }}>
      {isSideMenuOpen && <SideMenu />}
      <AppRoutes />
    </View>
  ) : <AuthRoutes />;
}

export default Router;
