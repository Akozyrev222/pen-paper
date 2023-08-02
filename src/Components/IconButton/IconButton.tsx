import React, {useState} from 'react';
import {TouchableOpacity, View, StyleProp, ViewStyle, StyleSheet, Text, TextInput} from 'react-native';
import {useTheme} from '@/Hooks';
import Icon from "@/Components/Icon";

interface Props {
    icon: string
    size: number
    color?: string
    borderColor?: string
    onPress?: () => void
}

const IconButton = (props: Props) => {
    const {icon, size, color, borderColor, onPress} = props
    const {Fonts, Gutters, Layout, Common, Colors} = useTheme();


    return (
        <TouchableOpacity onPress={onPress}  style={[Common.iconButton, Layout.alignItemsCenter, Layout.justifyContentCenter,{borderColor: borderColor}]}>
            <Icon name={icon} color={color} size={size}/>
        </TouchableOpacity >

    );
}


export default IconButton