import React, {useState} from 'react';
import {TouchableOpacity, View, StyleProp, ViewStyle, StyleSheet, Text, TextInput} from 'react-native';
import {useTheme} from '@/Hooks';
import Icon from "@/Components/Icon";
import {Controller, ControllerProps} from 'react-hook-form';

interface Props {
    title?: string
    placeholder?: string
    iconName?: string
    name: string
    control: ControllerProps
    rules?: object
    error?: object
}

const CDropdown = (props: Props) => {
    const {
        title,
    } = props

    const {Fonts, Gutters, Layout, Common, Colors} = useTheme();
    const [visible, setVisible] = useState(false)
    const data = [1, 2, 3, 4, 5, 6]
    const [currentData, setCurrentData]: any = useState()
    const [currentBorderColor, setCurrentBorderColor]: any = useState()

    return (
        <View style={[]}>
            <Text style={[Gutters.x16LMargin, Fonts.textMedium14, Fonts.textColorWhite]}>Title</Text>
            <TouchableOpacity
                style={[Common.textInput, Layout.rowSpaceBetween, Layout.alignItemsCenter, Gutters.x16LPadding, Gutters.x16RPadding]}
                onPress={() => setVisible(!visible)}
            >
                <Text style={[Fonts.textMedium16]}>{currentData}</Text>
                <Icon name={visible ? 'icon-upArrow' : 'icon-downArrow'} color={Colors.placeholder} size={24}/>
            </TouchableOpacity>
            {visible ?
                <View
                    style={[Gutters.x16TMargin, Common.dropdown]}>
                    {data.map((e, index) =>
                        <TouchableOpacity
                            onPress={()=>{setCurrentData(e)}}
                            style={[Common.dropdownItem, Layout.rowSpaceBetween, Layout.alignItemsCenter, Layout.justifyContentCenter, Gutters.x16LPadding, Gutters.x16RPadding]}>
                            <Text  style={[Fonts.textMedium16, Fonts.textColorWhite]}> {e}</Text>
                        </TouchableOpacity>
                    )}
                </View>

                :
                <></>
            }
        </View>
    )
}

CDropdown.defaultProps = {
    title: '',
    placeholder: '',
    iconName: '',
    rules: false,
    error: false,
}

export default CDropdown
