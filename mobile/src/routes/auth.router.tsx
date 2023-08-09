import React from "react";
import SignIn from "../pages/SignIn/SignIn";
import CreateAccount from "../pages/CreateAccount/CreateAccount";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
  </AuthStack.Navigator>
);

export default AuthRoutes;