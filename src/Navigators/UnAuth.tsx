import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Login from "@/Containers/Login/Login";

const Stack = createStackNavigator()

const UnAuth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        presentation: "transparentModal",
        ...TransitionPresets.FadeFromBottomAndroid
      }}
    >
      <Stack.Screen
        name={"Login"}
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default UnAuth
