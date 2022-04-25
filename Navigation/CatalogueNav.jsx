import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Catalogue from "../Screens/Catalogue";
import BirdInfo from "../Screens/BirdInfo";

const CatalogueStack = createStackNavigator();

const CatalogueNav = () => {
  return (
    <CatalogueStack.Navigator
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
      <CatalogueStack.Screen
        name="CatalogueList"
        component={Catalogue}
        options={{ title: "Catalogue" }}
      />
      <CatalogueStack.Screen
        name="BirdInfo"
        component={BirdInfo}
        options={{ title: "BirdInfo" }}
      />
    </CatalogueStack.Navigator>
  );
};

export default CatalogueNav;
