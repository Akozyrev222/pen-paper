import React, { useState } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { useTheme } from '@/Hooks';
import IconRulesetWithNoImage from "@/Assets/Icons/IconRulesetWithNoImage";
import ButtonModalEdit from "@/Components/ModalEdit/ButtonModalEdit";
import image from "@/Components/Rulesets/rectangle2.jpg";

interface Props {
  name?: string,
}

const CRulesets = (props: Props) => {
  const {
      name,
    } = props

  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();

  return (
    <View style={[Common.rulsetItems]}>
      <ImageBackground source={{ uri: props?.item?.image }} style={{ width: 148, height: 168 }}
                       imageStyle={{ borderRadius: 26 }}>
        <View style={[Common.rulsetItems]}>
          <ButtonModalEdit
            textFirst="Edit"
            textSecond="Delete"
          />
          {image
            ?
            <></>
            :
            <View style={[Layout.center, Gutters.x24TMargin]}>
              <IconRulesetWithNoImage />
            </View>
          }
        </View>
        <Text style={[Fonts.textRegular16, Fonts.textColorWhite, Gutters.x8TMargin]}>{name}</Text>
      </ImageBackground>
    </View>
  );
};

export default CRulesets;
