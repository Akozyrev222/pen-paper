import React, { useState } from 'react';
import { TouchableOpacity, View, StyleProp, ViewStyle, StyleSheet, Text, TextInput} from 'react-native';
import { useTheme } from '@/Hooks';
import Icon from "@/Components/Icon";
import { Controller, ControllerProps } from 'react-hook-form';

interface Props {
  title?: string
  placeholder?: string
  iconName?: string
  name: string
  control: ControllerProps
  rules?: object
  error?: object
}

const CInput = (props: Props) => {
  const {
    title,
    placeholder,
    iconName,
    name,
    control,
    rules,
    error,
  } = props

  if (!control) {
    return null
  }
  const { Fonts, Gutters, Layout, Common, Colors } = useTheme();

  return (
    <View style={[]}>
      {
        title
          ?
          <Text style={[Gutters.x16LMargin, Gutters.x4BMargin, Fonts.textColorWhite, Fonts.textMedium14]}>{title}</Text>
          :
          <></>
      }
      <View style={[Common.textInput, Layout.row, Layout.alignItemsCenter, Gutters.x16LPadding, error && Common.inputError]}>
        {iconName
          ?
          <View style={[Gutters.x8RPadding]}>
            <Icon name={iconName} color={Colors.placeholder} size={24} />
          </View>
          :
          <></>
        }
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                Layout.fill,
                Gutters.x0VPadding,
                Gutters.x0TPadding,
                Gutters.x0BPadding,
                Layout.center,
                Fonts.textRegular16,
              ]}
              placeholder={placeholder}
              placeholderTextColor={Colors.placeholder}
              onBlur={onBlur}
              onChangeText={val => onChange(val)}
              value={value}
              // textAlignVertical={'center'}
            />
          )}
          name={name}
          rules={rules}
        />
      </View>

      {error && (
        <View style={Common.errorMessage}>
          <Text
            style={[
              Fonts.textRegular14,
              Fonts.textColorError,
            ]}>
            {error?.message}
          </Text>
        </View>
      )}
    </View>
  );
}

CInput.defaultProps = {
  title: '',
  placeholder: '',
  iconName: '',
  rules: false,
  error: false,
}

export default CInput
