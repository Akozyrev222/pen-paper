import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from "@/Components/Icon";
import { useTheme } from '@/Hooks';

import IconRadioButtonChecked from "@/Assets/Icons/IconRadioButtonChecked";
import IconRadioButtonEmpty from "@/Assets/Icons/IconRadioButtonEmpty";


const RadioButton = () => {
  const { Fonts, Gutters, Layout, Common, Colors } = useTheme();

  const [checked, setChecked] = useState(0);
  var data = ['Every element has the same formula', 'Every element has its own formula'];

  return (
    <View>
      <View style={[Layout.column, Layout.justifyContentStart, Gutters.x12VMargin]}>
        {data.map((data, key) => {
          return (
            <View key={data} style={[ Gutters.x28BMargin]}>
              {checked == key ? (
                <TouchableOpacity style={[ Layout.row, Common.widthContentRadioButton ]}>
                  <View style={[Gutters.x12TMargin]}>
                    <IconRadioButtonChecked/>
                  </View>
                  <Text style={[ Fonts.textRegular16, Fonts.textColorWhite, Gutters.x8LPadding ]}>{data}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => { setChecked(key); }} style={[ Layout.row, Common.widthContentRadioButton ]}>
                  <View style={[Gutters.x12TMargin]}>
                    <IconRadioButtonEmpty/>
                  </View>
                  <Text style={[ Fonts.textRegular16, Fonts.textColorWhite, Gutters.x8LPadding]}>{data}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RadioButton;