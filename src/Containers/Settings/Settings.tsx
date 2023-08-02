import React, {useState} from 'react';
import {TouchableOpacity, View, StyleProp, ViewStyle, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import {useTheme} from '@/Hooks';
import PageNameComponent from "@/Components/PageNameComponent/PageNameComponent";
import Icon from "@/Components/Icon";
import CButton from "@/Components/Button";
import auth from "@react-native-firebase/auth";
import { navigateAndSimpleReset } from "@/Navigators/utils";

interface Props {

}

const Settings = ({ navigation, route }) => {
  const { Fonts, Gutters, Layout, Common, Colors } = useTheme();

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
        return navigateAndSimpleReset("UnAuth")
      })
  }

  return (
    <View style={[Layout.fill, Common.background]}>
      <SafeAreaView style={[Layout.fill, Common.screenWrapper, Gutters.x16HMargin, Layout.justifyContentBetween]}>
        <View>
          <PageNameComponent text="Settings" />
          <TouchableOpacity
            onPress={() => navigation.navigate("FrameFonts")}
            style={[Common.pageNameComponent, Layout.row, Layout.justifyContentBetween, Gutters.x32TMargin]}
          >
            <Text style={[Fonts.textMedium16, Fonts.textColorWhite]}>Frames fonts</Text>
            <Icon name="icon-rightArrow" color={Colors.white} size={24}></Icon>
          </TouchableOpacity>
          <View style={[Common.pageNameComponent, Layout.row, Layout.justifyContentBetween, Gutters.x32TMargin]}>
            <Text style={[Fonts.textMedium16, Fonts.textColorWhite]}>Sound</Text>
            <Icon name="icon-rightArrow" color={Colors.white} size={24}></Icon>
          </View>
        </View>
        <View style={[Layout.center, Gutters.x24BMargin]}>
          <CButton
            onPress={signOut}
            width={200}
            text={"Log out"}
            textColor={Fonts.textColorWhite}
            textStyle={Fonts.textMedium16}
            btnColor={Colors.iconBlue}
            border={true}
            innerColor={Colors.black}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};


export default Settings
