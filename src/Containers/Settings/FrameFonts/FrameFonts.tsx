import React, {useState} from 'react';
import {TouchableOpacity, View, StyleProp, ViewStyle, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import {useTheme} from '@/Hooks';
import Icon from "@/Components/Icon";
import PageNameComponent from "@/Components/PageNameComponent/PageNameComponent";
import CModal from "@/Components/Modal";
import IconButton from "@/Components/IconButton/IconButton";

interface Props {

}

const FrameFonts = ({ navigation, route }) => {
    const {Fonts, Gutters, Layout, Common, Colors} = useTheme();
    const [visible, setVisible] = useState(false)

    const [titleColor, setTitleColor] = useState(Colors.white);
    const [nameColor, setNameColor] = useState(Colors.white);
    const [valueColor, setValueColor] = useState(Colors.white);

    const onPressButtonTitle = () => {
        setVisible(!visible)
        setTitleColor(Colors.iconBlue)
        setNameColor(Colors.white)
        setValueColor(Colors.white)
    }
    const onPressButtonName = () => {
        setVisible(!visible)
        setTitleColor(Colors.white)
        setNameColor(Colors.iconBlue)
        setValueColor(Colors.white)
    }
    const onPressButtonVariables = () => {
        setVisible(!visible)
        setValueColor(Colors.iconBlue)
        setTitleColor(Colors.white)
        setNameColor(Colors.white)
    }
    const onPressHome = () => {
        navigation.navigate('Home')
    }
    const onPressColorPicker = () => {
        navigation.navigate('PickerColor')
        console.log('Press color picker')
    }
    return (
      <View style={[Layout.fill, Common.background]}>
          <SafeAreaView style={[Layout.fill, Common.screenWrapper, Gutters.x16HMargin]}>
              <PageNameComponent text="Frame fonts" icon="icon-home" onPressHome={onPressColorPicker} />
              <View style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, Gutters.x16BMargin]}>
                  <Text style={[Fonts.textBold16, Fonts.textColorWhite]}>Tittle</Text>
                  <IconButton icon={"icon-textFormatting"}
                              size={24}
                              color={titleColor}
                              onPress={onPressButtonTitle}
                    /*borderColor={titleborderColor}*/
                  />
              </View>
              <View style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, Gutters.x16BMargin]}>
                  <Text style={[Fonts.textBold14, Fonts.textColorWhite]}>Property name</Text>
                  <IconButton
                    icon={"icon-textFormatting"}
                    size={24}
                    color={nameColor}
                    onPress={onPressButtonName}
                  />
              </View>
              <View style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, Gutters.x16BMargin]}>
                  <Text style={[Fonts.textMedium14, Fonts.textColorWhite]}>Property value</Text>
                  <IconButton
                    icon={"icon-textFormatting"}
                    size={24}
                    color={valueColor}
                    onPress={onPressButtonVariables}
                  />
              </View>
              <CModal
                isVisible={visible}
                setVisible={setVisible}
                title='Fonts'
                btnTitle='Clear'
                onPressColorPicker={onPressColorPicker}
              />
          </SafeAreaView>
      </View>
    );
}


export default FrameFonts
