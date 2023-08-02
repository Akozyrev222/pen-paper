import React, { useState, useRef } from 'react';
import Popover, { PopoverPlacement } from 'react-native-popover-view';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Easing,
  Platform
} from "react-native";
import { useTheme } from '@/Hooks';
import Icon from "@/Components/Icon";
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title?: string
  btnTitle?: string
  isVisible?: boolean
  textFirst?: string
  textSecond?: string
  textThird?: string
  btnColor?: string
}

const ButtonModalEdit = (props: Props) => {
  const {
    btnColor,
    textFirst,
    textSecond,
  } = props

  const { Fonts, Gutters, Layout, Common, Colors } = useTheme()

  const [modalEdit, setModalEdit] = useState(false);

  return (
    <Popover
      placement={PopoverPlacement.BOTTOM}
      popoverStyle={[Common.modalEdit]}
      arrowSize={{ width: 0, height: 5 }}
      isVisible={modalEdit}
      backgroundStyle={{ opacity: 0 }}
      onRequestClose={() => setModalEdit(false)}
      animationConfig={{ duration: 100, easing: Easing.linear }}
      verticalOffset={Platform.OS === "ios" ? 0 : -StatusBar.currentHeight}
      from={(
        <TouchableOpacity
          onPress={() => setModalEdit(true)}
          hitSlop={{ top: 12, bottom: 12, left: -92, right: 12 }}
          style={Layout.alignItemsEnd}
        >
          <LinearGradient
            colors={btnColor ? [btnColor, btnColor] : ['rgba(22,232,194,0.8)', 'rgba(49,184,201,0.8)']}
            style={[
              Common.buttonRuleset,
              Layout.center,
              Gutters.x12TMargin,
              Gutters.x12RMargin
            ]}
          >
            <Icon name={'icon-more-black'} color={modalEdit ? Colors.white : Colors.black} size={16} />
          </LinearGradient>
        </TouchableOpacity>
      )}
    >
      <View style={[Gutters.x16TMargin, Gutters.x16LMargin]}>
        <Text style={[Fonts.textRegular16, Fonts.textColorWhite, Gutters.x4BMargin]}>{textFirst}</Text>
        <Text style={[Fonts.textRegular16, Fonts.textColorWhite]}>{textSecond}</Text>
      </View>
    </Popover>
  );
}

export default ButtonModalEdit;
