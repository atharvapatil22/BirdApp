import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";

const AuthNav = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={
        {
          // headerRight: () => (
          //   <View style={{ paddingHorizontal: '5%' }}>
          //     <Image
          //       style={{
          //         width: heightSc * 160,
          //         height: heightSc * 50,
          //       }}
          //       source={require('../assets/images/logo.png')}
          //     />
          //   </View>
          // ),
        }
      }
    >
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ title: "Log In" }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Register" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNav;
