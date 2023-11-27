import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Gallery, GalleryDetails } from "../Screens";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Gallery">
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Details" component={GalleryDetails} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
