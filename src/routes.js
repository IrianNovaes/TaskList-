import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Menu from "./pages/Menu";
import Input from "./pages/Input";
import List from "./pages/List";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Menu" component={Menu} />
        <AppStack.Screen name="Input" component={Input} />
        <AppStack.Screen name="List" component={List} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
