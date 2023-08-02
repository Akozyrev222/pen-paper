import React, {Component, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    StyleProp,
    ViewStyle,
    FlatList, TouchableOpacity,
} from "react-native";
import {useTheme} from '@/Hooks';
import CButton from "@/Components/Button";
import {white} from "react-native-paper/lib/typescript/styles/colors";
import Apple from "@/Assets/Icons/Apple";
import Icon from "@/Components/Icon";
import {ColorPicker} from "react-native-color-picker";

interface Props {
    title?: string
    btnTitle?: string
    isVisible?: boolean
    setVisible?: (visible: boolean) => void
    containerStyles?: StyleProp<ViewStyle>
    component?: React.FC
    data?: []
    onPressColorPicker?: () => void
}

const FontsContainer = (props: Props) => {
    const {Fonts, Gutters, Layout, Common, Colors} = useTheme()
    const {
        title,
        btnTitle,
        isVisible,
        setVisible,
        containerStyles,
        /*data*/
        onPressColorPicker
    } = props
    const [currentFontFamily, setCurrentFontFamily] = useState('Nebula-Regular');
    const [isBold, setIsBold] = useState(false)
    const [isItalic, setIsItalic] = useState(false)
    const [isBoldActive, setIsBoldActive] = useState(false)
    const [isItalicActive, setIsItalicActive] = useState(false)
    const [currentFont, setCurrentFont] = useState({
        fontFamily: currentFontFamily,
        fontSize: 16,
        color: Colors.white
    });
    const fontName = [
        {
            title: 'Agfiustor',
            font: {
                fontFamily: 'Agfiustor-Regular'
            },
            isBold: true,
            isItalic: true,
        },
        {
            title: 'Benoirs',
            font: {
                fontFamily: 'Benoirs-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Benoirs-Regular`})
            }
        },
        {
            title: 'Bjorn',
            font: {
                fontFamily: 'Bjorn-Regular'
            },
            isBold: true,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Bjorn-Regular`})
            }
        },
        {
            title: 'Century',
            font: {
                fontFamily: 'Century-Regular'
            },
            isBold: true,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Bjorn-Regular`})
            }
        },
        {
            title: 'Cybersquad',
            font: {
                fontFamily: 'Cybersquad-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Cybersquad-Regular`})
            }
        },
        {
            title: 'Digitally',
            font: {
                fontFamily: 'Digitally-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Digitally-Regular`})
            }
        },
        {
            title: 'DownhillRush',
            font: {
                fontFamily: 'DownhillRush-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `DownhillRush-Regular`})
            }
        },
        {
            title: 'Equinox',
            font: {
                fontFamily: 'Equinox-Regular'
            },
            isBold: true,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Equinox-Regular`})
            }
        },
        {
            title: 'Futuristic',
            font: {
                fontFamily: 'Futuristic-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Futuristic-Regular`})
            }
        },
        {
            title: 'Hamiltone',
            font: {
                fontFamily: 'Hamiltone-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Hamiltone-Regular`})
            }
        },
        {
            title: 'Hyphothesis',
            font: {
                fontFamily: 'Hyphothesis-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `HyphothesisGrunge-Regular`})
            }
        },
        {
            title: 'Nightscary',
            font: {
                fontFamily: 'Nightscary-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Nightscary-Regular`})
            }
        },
        {
            title: 'NorthDragon',
            font: {
                fontFamily: 'NorthDragon-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `NorthDragon-Regular`})
            }
        },
        {
            title: 'Pressure',
            font: {
                fontFamily: 'Pressure-Regular'
            },
            isBold: false,
            isItalic: true,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Pressure-Regular`})
            }
        },
        {
            title: 'Questoz',
            font: {
                fontFamily: 'Questoz-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Questoz-Regular`})
            }
        },
        {
            title: 'Sxuidz',
            font: {
                fontFamily: 'Sxuidz-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `Sxuidz-Regular`})
            }
        },
        {
            title: 'VampireKing',
            font: {
                fontFamily: 'VampireKing-Regular'
            },
            isBold: false,
            isItalic: false,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontFamily: `VampireKing-Regular`})
            }
        }
    ]
    const fontSize = [
        {
            title: 'Large',
            font: Fonts.textMedium24,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontSize: 24})
            }
        },
        {
            title: 'Medium',
            font: Fonts.textMedium16,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontSize: 16})
            }
        },
        {
            title: 'Regular',
            font: Fonts.textMedium14,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontSize: 14})
            }
        },
        {
            title: 'Small',
            font: Fonts.textMedium12,
            chooseFont: () => {
                setCurrentFont({...currentFont, fontSize: 12})
            }
        }
    ]
    const fontStyle = [
        {
            title: 'B',
            font: Fonts.textMedium24
        },
        {
            title: 'I',
            font: Fonts.textMedium24
        },
        {
            title: 'U',
            font: Fonts.textMedium24,
        },
        {
            title: 'S',
            font: Fonts.textMedium24
        }
    ]
    type itemType = {
        title: string,
        font?: string
    }
    const onBoldPress = () => {
        if (isBoldActive === true) {
            const font = currentFont.fontFamily
            const newFont = font.substring(0, font.indexOf('-'))
            setCurrentFont({...currentFont, fontFamily: `${newFont}-Bold`})
            setIsBoldActive(!isBoldActive)
            console.log(currentFont)
        }else {
            const font = currentFont.fontFamily
            const newFont = font.substring(0, font.indexOf('-'))
            setCurrentFont({...currentFont, fontFamily: `${newFont}-Regular`})
            console.log(currentFont)
            setIsBoldActive(!isBoldActive)
        }
    }
    const onItalicPress = () => {
        if (isItalicActive === true) {
            const font = currentFont.fontFamily
            const newFont = font.substring(0, font.indexOf('-'))
            setCurrentFont({...currentFont, fontFamily: `${newFont}-Italic`})
            setIsItalicActive(!isItalicActive)
            console.log(currentFont)
        }else {
            const font = currentFont.fontFamily
            const newFont = font.substring(0, font.indexOf('-'))
            setCurrentFont({...currentFont, fontFamily: `${newFont}-Regular`})
            setIsItalicActive(!isItalicActive)
            console.log(currentFont)
        }
    }
    const fontFamilyRenderItem = ({item}: any) => {
        return (
            <TouchableOpacity style={[Layout.justifyContentEnd, Layout.alignItemsCenter]}
                              onPress={() => {
                                  setCurrentFont({...currentFont, fontFamily: `${item.title}-Regular`})
                                  item.isBold ? setIsBold(true) : setIsBold(false)
                                  item.isItalic ? setIsItalic(true) : setIsItalic(false)
                                  console.log(isBold)
                                  console.log(isItalic)
                              }}>
                <Text
                    style={[item.font, Fonts.textColorWhite, Gutters.x16BMargin, Gutters.x16RMargin]}>{item.title}</Text>
            </TouchableOpacity>
        );
    };
    const fontSizeRenderItem = ({item}: any) => {
        return (
            <TouchableOpacity style={[Layout.justifyContentEnd, Layout.alignItemsCenter]} onPress={item.chooseFont}>
                <Text
                    style={[item.font, Fonts.textColorWhite, Gutters.x16BMargin, Gutters.x16RMargin]}>{item.title}</Text>
            </TouchableOpacity>
        );
    };
    const fontCustomRenderItem = ({item}: any) => {
        return (
            <TouchableOpacity style={[Layout.justifyContentEnd, Layout.alignItemsCenter]} onPress={item.chooseFont}>
                <Text
                    style={[Fonts.textMedium24, Gutters.x16BMargin, Gutters.x16LMargin, {}]}>{item.title}</Text>
            </TouchableOpacity>
        );
    };


    return (
        <View>
            <FlatList
                horizontal
                style={[Gutters.x16TMargin]}
                data={fontName}
                onEndReachedThreshold={0.3}
                numColumns={1}
                keyExtractor={(item, index) => index}
                renderItem={fontFamilyRenderItem}
                scrollToOverflowEnabled={true}
            />
            <FlatList
                horizontal
                style={[Gutters.x16TMargin]}
                data={fontSize}
                onEndReachedThreshold={0.3}
                numColumns={1}
                keyExtractor={(item, index) => index}
                renderItem={fontSizeRenderItem}
                scrollToOverflowEnabled={true}
            />
            <View
                style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter]}>
                <View style={[Layout.row]}>
                    <TouchableOpacity style={[Layout.alignItemsCenter, Gutters.x16RMargin]} onPress={onBoldPress}>
                        <Icon name="icon-B" color={isBold ? Colors.white : Colors.disabled} size={24}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.alignItemsCenter, Gutters.x16RMargin]} onPress={onItalicPress}>
                        <Icon name="icon-I" color={isItalic ? Colors.white : Colors.disabled} size={24}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.alignItemsCenter, Gutters.x16RMargin]}>
                        <Icon name="icon-U" color={Colors.disabled} size={27}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.alignItemsCenter, Gutters.x16RMargin]}>
                        <Icon name="icon-S" color={Colors.disabled} size={24}></Icon>
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={[Layout.alignItemsCenter, Gutters.x16RMargin]}>
                        <Icon name="icon-I" color={Colors.white} size={24}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.alignItemsCenter, Gutters.x16RMargin]}>
                        <Icon name="icon-U" color={isBold? Colors.white: Colors.iconBlue} size={24}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Layout.alignItemsCenter, Gutters.x16RMargin]}>
                        <Icon name="icon-S" color={Colors.white} size={24}></Icon>
                    </TouchableOpacity>*/}

                </View>


                {/*<FlatList
                    horizontal
                    style={[Gutters.x16TMargin]}
                    data={fontStyle}
                    onEndReachedThreshold={0.3}
                    numColumns={1}
                    keyExtractor={(item, index) => index}
                    renderItem={fontCustomRenderItem}
                    scrollToOverflowEnabled={true}
                />*/}
                <TouchableOpacity
                    style={[Layout.alignItemsCenter,
                        {
                            width: 34,
                            height: 34,
                            borderRadius: 15,
                            backgroundColor: Colors.white,
                            borderWidth: 1,
                            borderColor: Colors.iconBlue
                        }
                    ]}
                    onPress={onPressColorPicker}
                ></TouchableOpacity>
            </View>
            <ColorPicker/>
            <Text style={[currentFont]}>Font changing</Text>
        </View>


    );
}

const styles = StyleSheet.create({
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
});


FontsContainer.defaultProps = {
    title: '',
    btnTitle: '',
    isVisible: false,
    containerStyles: null,
}

export default FontsContainer
