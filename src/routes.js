import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Menu from "./pages/Menu";
import Input from "./pages/Input";
import List from "./pages/List";
import Category from "./pages/Category";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Menu" component={Menu} />
        <AppStack.Screen name="Input" component={Input} />
        <AppStack.Screen name="List" component={List} />
        <AppStack.Screen name="Category" component={Category} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
