import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BirdInfo from "../Screens/BirdInfo";
import Home from "../Screens/Home";

const HomeStack = createStackNavigator();

const HomeNav = () => {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ title: "Home" }}
      />
      <HomeStack.Screen
        name="BirdInfo"
        component={BirdInfo}
        options={{ title: "BirdInfo" }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
