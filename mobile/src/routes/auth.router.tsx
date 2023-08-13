import React from "react";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

import { StackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "../contexts/theme";

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  const { theme } = useTheme();
  
  const headerOptions: StackNavigationOptions = {
    headerTitle: '',
    headerShadowVisible: false,
    headerStyle: { backgroundColor: theme.colors.background},
    headerTintColor: theme.colors.primary,
  }

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} options={headerOptions} />
      <AuthStack.Screen name="SignUp" component={SignUp} options={headerOptions} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;