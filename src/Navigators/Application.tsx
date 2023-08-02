import React, {FunctionComponent, useEffect, useState} from 'react'
import {StatusBar} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {StartupContainer} from '@/Containers'
import {useTheme} from '@/Hooks'
import {navigationRef} from './utils'
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from '@env'
import { DarkTheme } from '@react-navigation/native'

const Stack = createStackNavigator()

let StartupNavigator: FunctionComponent | null

let UnAuthNavigator: FunctionComponent | null

let NeedUpdateNavigator: FunctionComponent | null

// @refresh reset
const ApplicationNavigator = () => {
    const {Common, Layout, darkMode, NavigationTheme} = useTheme()
    const {colors} = NavigationTheme

    const [isApplicationLoaded, setIsApplicationLoaded] = useState(false);

    useEffect(
        () => () => {
            setIsApplicationLoaded(false);
            StartupNavigator = null;
            UnAuthNavigator = null;
            // NeedUpdateNavigator = null;
        },
        []
    );

    useEffect(() => {
        if (!isApplicationLoaded) {
            // if (NeedUpdateNavigator == null) {
            //   NeedUpdateNavigator = require("@/Navigators/NeedUpdate").default;
            // }
            if (StartupNavigator == null) {
                StartupNavigator = require('@/Navigators/Main').default
            }
            if (UnAuthNavigator == null) {
                UnAuthNavigator = require('@/Navigators/UnAuth').default
            }
            setIsApplicationLoaded(true);
        }
    }, []);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: WEB_CLIENT_ID,
            offlineAccess: true,
        });
    }, [])

    return (
      <>
          <NavigationContainer theme={DarkTheme} ref={navigationRef}>
              <StatusBar translucent={true} barStyle={darkMode ? "light-content" : "dark-content"} hidden
                         showHideTransition={"fade"} />
              <Stack.Navigator screenOptions={{
                  headerShown: false
              }}>
                  <Stack.Screen name="Startup" component={StartupContainer} />
                  {isApplicationLoaded && StartupNavigator != null && (
                    <Stack.Screen
                      name="AppStack"
                      component={StartupNavigator}
                      options={{
                          animationEnabled: false
                      }}
                    />
                  )}
                  {isApplicationLoaded && UnAuthNavigator != null && (
                    <Stack.Screen
                      name="UnAuth"
                      component={UnAuthNavigator}
                      options={{
                          animationEnabled: false
                      }}
                    />
                  )}
              </Stack.Navigator>
          </NavigationContainer>
      </>
    );
}

export default ApplicationNavigator
