import React from "react";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "../contexts/theme";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  const { theme } = useTheme();
  
  const headerOptions = {
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