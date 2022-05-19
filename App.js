import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Catalogue from "./Screens/Catalogue";
import Ionicons from "react-native-vector-icons/Ionicons";
import CatalogueNav from "./Navigation/CatalogueNav";
import "react-native-gesture-handler";
import Login from "./Screens/Login";
import AuthNav from "./Navigation/AuthNav";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import HomeNav from "./Navigation/HomeNav";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={{ height: "100%" }}>
        <NavigationContainer>
          <BottomTab.Navigator
            screenOptions={{
              headerShown: false,
              // headerRight: () => (
              //   <View style={{ paddingHorizontal: "5%" }}>
              //     <Image
              //       style={{
              //         width: 160,
              //         height: 50,
              //       }}
              //       source={require("./assets/favicon.png")}
              //     />
              //   </View>
              // ),
            }}
            initialRouteName="Home"
            // tabBarOptions={{
            //   labelStyle: {
            //     // fontFamily: "TrebuchetMS",
            //     fontWeight: "bold",
            //   },
            //   activeTintColor: "black",
            //   inactiveTintColor: "#9E9E9E",
            // }}
          >
            <BottomTab.Screen
              name="Home"
              component={HomeNav}
              // children={(data) => <Home />}
              options={{
                tabBarLabel: "HOME",
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="home"
                    size={25}
                    color={focused ? "blue" : "#9E9E9E"}
                  />
                ),
              }}
            />
            <BottomTab.Screen
              name="Catalogue"
              component={CatalogueNav}
              // children={(data) => <Catalogue />}
              options={{
                tabBarLabel: "CATALOGUE",
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="list"
                    size={25}
                    color={focused ? "blue" : "#9E9E9E"}
                  />
                ),
              }}
            />
          </BottomTab.Navigator>
        </NavigationContainer>
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
