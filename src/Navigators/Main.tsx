import React from 'react'
import Username from "@/Containers/Username";
import Home from "@/Containers/Home/Home";
import RuleSets from "@/Containers/RuleSets/RuleSets";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "@/Containers/Settings/Settings";
import FrameFonts from "@/Containers/Settings/FrameFonts/FrameFonts";
import {PickerColor} from "@/Components/PickerColor/PickerColor";
import { useSelector } from "react-redux";
import NoRulesets from "@/Containers/RuleSets/NoRulesets";
import NewRulesets from "@/Containers/RuleSets/NewRulesets";

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  const { user } = useSelector((state) => state?.users);

  return (
    <Stack.Navigator>
      {!user?.username &&
        <Stack.Screen
          name="Username"
          component={Username}
          options={{ headerShown: false }}
        />}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FrameFonts"
        component={FrameFonts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rulesets"
        component={RuleSets}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NoRulesets"
        component={NoRulesets}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewRulesets"
        component={NewRulesets}
        options={{ headerShown: false }}
      />
        <Stack.Screen
            name="PickerColor"
            component={PickerColor}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
};

export default MainNavigator
