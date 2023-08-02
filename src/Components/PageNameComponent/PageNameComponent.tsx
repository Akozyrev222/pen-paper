import React, {useState} from 'react';
import {TouchableOpacity, View, StyleProp, ViewStyle, StyleSheet, Text, TextInput} from 'react-native';
import {useTheme} from '@/Hooks';
import Icon from "@/Components/Icon";
import IconButton from "@/Components/IconButton/IconButton";
import { navigationRef } from "@/Navigators/utils";

interface Props {
    text: string
    icon?: string
    onPressHome?: () => void
}

const Settings = (props: Props) => {
    const {text, icon, onPressHome} = props
    const {Fonts, Gutters, Layout, Common, Colors} = useTheme();


    return (
        <View style={[Layout.alignItemsCenter, Layout.row, Layout.justifyContentBetween, Common.pageNameComponent]}>
          <TouchableOpacity onPress={() => navigationRef.goBack()}>
            <Icon name={"icon-backArrow"} color={Colors.white} size={24}/>
          </TouchableOpacity>
            <Text style={[Fonts.textBold24, Fonts.textColorWhite]}>{text}</Text>
            {icon ?
                <IconButton onPress={onPressHome} icon={icon} size={24} color={Colors.white}/>
                :
                <Text></Text>
            }

        </View>
    );
}


export default Settings
