import React, { useEffect, useCallback } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import auth from '@react-native-firebase/auth'
import { animated, useSpring } from '@react-spring/native'
import { useDispatch } from "react-redux";
import { fetchUserById } from "@/Services/modules/users/fetchOne";
import { debounce } from 'lodash'

const StartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [styles, api] = useSpring(() => ({
    from: { opacity: 1 },
  }))

  const startAnimation = () => {
    api.start(() => ({
      to: [
        { opacity: 0.5 },
        { opacity: 0 },
      ],
      config: { duration: 200 },
      from: { opacity: 1 },
    }))
    return new Promise(resolve => setTimeout(resolve, 280));
  }

  async function onAuthStateChanged(user: object | null) {
    setDefaultTheme({ theme: "default", darkMode: false });
    if (user) {
      const fetchUser = new Promise(async resolve => {
        await dispatch(fetchUserById({ doc: user?.uid })).then((fetchRes: object) => {
          if (fetchRes.type === 'users/fetchByIdStatus/fulfilled' && fetchRes?.payload) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });

      fetchUser.then(async (value) => {
        if (value) {
          await startAnimation();
          return navigateAndSimpleReset("AppStack");
        } else {
          await startAnimation();
          return navigateAndSimpleReset("UnAuth");
        }
      });
    } else {
      await startAnimation();
      return navigateAndSimpleReset("UnAuth");
    }
  }

  const onAuthStateChangedFunction = useCallback(
    debounce(onAuthStateChanged, 300),
    [],
  )

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChangedFunction);
    return subscriber
  }, [])

  return (
    <animated.View style={[Layout.fill, Layout.colCenter, styles]}>
      <View style={[Layout.fill, Layout.colCenter]}>
        <Brand />
        <ActivityIndicator size={"large"} style={[Gutters.largeVMargin]} />
        <Text style={Fonts.textCenter}>{t("welcome")}</Text>
      </View>
    </animated.View>
  );
}

export default StartupContainer
