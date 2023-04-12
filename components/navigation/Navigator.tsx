import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import { CalendarScreen } from "../screens/CalendarScreen/CalendarScreen";
import { DateScreen } from "../screens/DateScreen/DateScreen";
import { ProfileScreen } from "../screens/ProfileScreen/ProfileScreen";
import { RegisterScreen } from "../screens/RegisterScreen/RegisterScreen";

export const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={RegisterScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Date" component={DateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
