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
import CInput from "@/Components/Input";
import Icon from "@/Components/Icon";

interface Props {
  title?: string
  btnTitle?: string
  isVisible?: boolean
  setVisible: () => void
  containerStyles?: StyleProp<ViewStyle>
}

const CModalMenu = (props: Props) => {
  const {
    title,
    btnTitle,
    isVisible,
    setVisible,
    containerStyles,
    placeholderFirstInput,
    placeholderSecondInput,
  } = props

  const { Fonts, Gutters, Layout, Common, Colors } = useTheme()

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={[Fonts.textBold16, Fonts.textColorWhite, Gutters.x16BMargin]}>{item.condition}</Text>
      </View>
    );
  };

  const data = [
    { condition: 'Condition 1' },
    { condition: 'Condition 2' },
    { condition: 'Condition 3' },
    { condition: 'Condition 4' },
  ];

  return (

    <Modal
      isVisible={isVisible}
      style={[]}
      onBackButtonPress={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}
      onSwipeComplete={() => setVisible(false)}
      onSwipeThreshold={20}
      swipeDirection={["down"]}
    >
      <View
        style={[Common.modalBackground, Gutters.x24HPadding, Gutters.x32VPadding, Common.modalMenuBorderRadius]}>
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <View style={[Layout.fill, Layout.row, Layout.alignItemsCenter, Layout.justifyContentBetween]}>
            <Text style={[Fonts.textBold24, Fonts.textColorWhite]}>
              {title}
            </Text>

            <View style={[Layout.row, Layout.alignItemsCenter]}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Icon name={"icon-close"} color={Colors.white} size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View >
        <View style={[Gutters.x4HPadding, Gutters.x8BPadding, Gutters.x16TPadding]}>
         <CInput
            title="Name"
            placeholder={placeholderFirstInput}
         />
         <CInput
            title="Age"
            placeholder={placeholderSecondInput}
         />
        </View>
      </View>
      <View style={[Layout.rowVCenter, Common.modalEditPaddingButton]}>
        <CButton
            text={btnTitle}
            textColor={Fonts.textBold16, Fonts.textColorBlack}
            width={148}
        />
      </View>
    </Modal>

  );
}

CModalMenu.defaultProps = {
  title: '',
  placeholderFirstInput: '',
  placeholderSecondInput: '',
  btnTitle: '',
  isVisible: false,
  containerStyles: null,
}

export default CModalMenu