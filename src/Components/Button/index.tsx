import React from 'react'
import {TouchableOpacity, View, StyleProp, ViewStyle, StyleSheet, Text} from 'react-native'
import {animated, Controller, useSpring} from '@react-spring/native'
import {Icon} from '@/Components'
import {useTheme} from '@/Hooks';
import Styles from './styles'
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    text?: string
    btnColor?: string
    textColor?: any
    textStyle?: any
    innerColor?: string
    iconName?: string
    transparent?: boolean
    next?: boolean
    close?: boolean
    onPress: () => void
    containerStyles?: StyleProp<ViewStyle>
    width?: number | string
    border?: boolean
    alignSelf?: string
}

const CButton = (props: Props) => {
    const {
        onPress,
        text,
        textColor,
        textStyle,
        innerColor,
        btnColor,
        next,
        close,
        iconName,
        transparent,
        containerStyles,
        width,
        border,
        alignSelf
    } = props
    const {Fonts, Gutters, Layout, Common, Colors} = useTheme()
    const testAnim = new Controller({opacity: 0})
    testAnim.start({opacity: 1})

    const getGetContainerAnimation = () => {
        const [styles, api] = useSpring(() => ({}))

        const startAnimation = () => {
            return api.start(() => ({
                to: [
                    {opacity: 0.8},
                    {opacity: 1},
                ],
                config: {duration: 140},
                from: {opacity: 0.8},
            }))
        }
        return {styles, startAnimation}
    }

    const getGetTextAnimation = () => {
        const [styles, api] = useSpring(() => ({}))
        const startAnimation = () => {
            return api.start(() => ({
                to: [
                    {opacity: 0, paddingRight: 0},
                    {opacity: 1, paddingRight: 12},
                    {opacity: 1, paddingRight: 0},
                ],
                config: {duration: 140},
                from: {opacity: 1, paddingRight: 0},
            }))
        }
        return {styles, startAnimation}
    }

    const containerSA = getGetContainerAnimation()
    const texAnimation = getGetTextAnimation()

    const handleTouch = () => {
        if (onPress) {
            setTimeout(onPress, 140)
        }
        containerSA.startAnimation()
        texAnimation.startAnimation()
    }

    const transparentWidth = width - 2

    return (
        <animated.View style={[containerSA.styles, containerStyles]}>
            <TouchableOpacity
                onPress={handleTouch}
                activeOpacity={1}
            >
                <LinearGradient
                    colors={btnColor ? [btnColor, btnColor] : ['#16E8C2', '#31B8C9']}
                    style={[
                        Layout.rowHCenter,
                        Common.button.rounded,
                        transparent && {backgroundColor: "transparent"},
                        width && {width: width},
                    ]}
                >
                    {/*{!!iconName && (*/}
                    {/*  <View style={[Layout.colCenter, Styles.icon]}>*/}
                    {/*    <CIcon name={iconName} size={18} color={Colors.textSecondary} />*/}
                    {/*  </View>*/}
                    {/*)}*/}
                    <View style={[{
                        width: transparentWidth,
                        backgroundColor: innerColor ? innerColor : 'transparent',
                        borderRadius: 24,
                        alignSelf: 'center',
                    }]}>
                        <animated.Text
                            style={[
                                texAnimation.styles,
                                // next && Gutters.smallPlusHMargin,
                                // close && Gutters.smallPlusHMargin,
                                Fonts.textBold16,
                                textStyle && textStyle,
                                Fonts.textCenter,
                                textColor && textColor,
                                border && {height: 46, lineHeight: 46}
                            ]}
                        >
                            {text}
                        </animated.Text>
                    </View>
                </LinearGradient>
                {/*{next && (*/}
                {/*  <View>*/}
                {/*    <CIcon name={"arrow-next"} size={18} color={textColor ? textColor : Colors.textSecondary} />*/}
                {/*  </View>*/}
                {/*)}*/}
                {/*{close && (*/}
                {/*  <View>*/}
                {/*    <CIcon name={"close"} size={14} color={textColor} />*/}
                {/*  </View>*/}
                {/*)}*/}
            </TouchableOpacity>
        </animated.View>
    );
}

CButton.defaultProps = {
    text: 'button_text',
    iconName: '',
    btnColor: null,
    textColor: null,
    textStyle: null,
    innerColor: null,
    transparent: false,
    next: false,
    close: false,
    containerStyles: null,
    width: 200,
    border: false,
}

export default CButton
