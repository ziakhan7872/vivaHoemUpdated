import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

console. disableYellowBox = true;
// ROUTES

import Main from "./src/Routes/Main/index";
import AddReview from "./src/Routes/AddReview/index"
import Login from "./src/StartUp/Login/index"
import SignUp from "./src/StartUp/SignUp"
// NAVIGATIONS
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
