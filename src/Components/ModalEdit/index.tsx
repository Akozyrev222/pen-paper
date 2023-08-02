import React, { Component, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
  StyleProp,
  ViewStyle,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useTheme } from '@/Hooks';
import Modal from "react-native-modal";
import CButton from "@/Components/Button";
import Icon from "@/Components/Icon";

interface Props {
  title?: string
  btnTitle?: string
  isVisible?: boolean
  setVisible: () => void
  containerStyles?: StyleProp<ViewStyle>
  textFirst?: string
  textSecond?: string
  textThird?: string
}

const CModalEdit = (props: Props) => {
  const {
    title,
    btnTitle,
    isVisible,
    setVisible,
    textFirst,
    textSecond,
    textThird,
    containerStyles,
  } = props

  const { Fonts, Gutters, Layout, Common, Colors } = useTheme()

  return (

    <Modal
      animationInTiming={0.1}
      animationOutTiming={0.1}
      isVisible={isVisible}
      style={{ width: 175 }}
      onBackButtonPress={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}
      onSwipeComplete={() => setVisible(false)}
      onSwipeThreshold={20}
      backdropOpacity={0}
      coverScreen={true}
    >
      <View style={[Common.modalEditBackground, Gutters.x16HPadding, Gutters.x16VPadding, Common.modalEditBorderRadius]}>
        <Text style={[Fonts.textRegular16, Fonts.textColorWhite, Gutters.x8BPadding]}>{textFirst}</Text>
        <Text style={[Fonts.textRegular16, Fonts.textColorWhite]}>{textSecond}</Text>
        {
          textThird
          ?
          <Text style={[Fonts.textRegular16, Fonts.textColorWhite, Gutters.x8TPadding]}>{textThird}</Text>
          :
          <></>
        }
      </View>
    </Modal>

  );
}

CModalEdit.defaultProps = {
  title: '',
  btnTitle: '',
  isVisible: false,
  containerStyles: null,
}

export default CModalEdit
