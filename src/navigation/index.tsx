import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomBarParamList, RootStackParamList } from "./types";
import { HomeScreen, MenuScreen, AuthScreen } from "src/screens";
import { Image } from "react-native";
import Home1 from "src/assets/home1.png";
import Home2 from "src/assets/home2.png";
import menu1 from "src/assets/menu1.png";
import menu2 from "src/assets/menu2.png";
import { ModalPreview } from "src/modals";

const AppStack = createNativeStackNavigator<RootStackParamList>();
const BottomBar = createBottomTabNavigator<BottomBarParamList>();

function BottomBarTab() {
  return (
    <BottomBar.Navigator
      initialRouteName="bottom_bar_home"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: "Black",
        tabBarInactiveTintColor: "darkslategrey",
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      })}
    >
      <BottomBar.Screen
        name="bottom_bar_home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? Home1 : Home2}
                style={{ width: 25, height: 25, resizeMode: "contain" }}
              />
            );
          },
        }}
      />

      <BottomBar.Screen
        name="bottom_bar_menu"
        component={MenuScreen}
        options={{
          title: "Menu",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? menu1 : menu2}
                style={{ width: 25, height: 25, resizeMode: "contain" }}
              />
            );
          },
        }}
      />
    </BottomBar.Navigator>
  );
}

function AppNavigation() {
  return (
    <AppStack.Navigator
      initialRouteName="bottom_bar"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <AppStack.Screen
        name="bottom_bar"
        component={BottomBarTab}
        options={{ animation: "slide_from_left" }}
      />
      <AppStack.Screen
        name="auth"
        component={AuthScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <AppStack.Group
        screenOptions={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      >
        <AppStack.Screen name="modal_preview" component={ModalPreview} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
}

export default AppNavigation;
