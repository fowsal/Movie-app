import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import MovieScreen from "../Screens/MovieScreen/MovieScreen";
import PersonScreen from "../Screens/PersonScreen/Personscreen";
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{ headerShown: false}} component={MovieScreen } />
        <Stack.Screen name="Person" options={{ headerShown: false}} component={PersonScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// import React from 'react'

// export default function appNavigation() {
//   return (
//     <div>appNavigation</div>
//   )
// }
