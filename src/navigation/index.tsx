import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "screens/Home";
import ProductDetails from "screens/ProductDetails";

const Stack = createNativeStackNavigator();

function RootNavigator({ onReady }: any) {
  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"ProductDetails"} component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
