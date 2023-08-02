import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Platform} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {useTheme} from "@/Hooks";

interface Props {
    title?: string
    text?: string
    borderRadius?: 0 | 15
}

const CCheckbox = (props: Props) => {

    const {title, text, borderRadius} = props;

    const {Fonts, Gutters, Layout, Common, Colors} = useTheme()
    const [agree, setAgree] = useState(false);
    const [border, setBorder] = useState(2);
    return (
        <View>
            {title != undefined ?
                <View>
                    <Text style={Fonts.textMedium14}>Title</Text>
                    <View style={Layout.rowHCenter}>
                        <BouncyCheckbox
                            size={24}
                            isChecked={false}
                            fillColor={Colors.iconBlue}
                            iconStyle={{
                                borderWidth: border,
                                borderColor: '#8F8F8F',
                                borderRadius: borderRadius,
                            }}
                            onPress={() => {
                                setAgree(!agree)
                                setBorder(border === 2 ? 0 : 2)
                                console.log(agree)
                            }}
                        />
                        <Text style={[
                            Fonts.textMedium16,
                            /* textStyle && textStyle,*/
                            Fonts.textCenter,
                            /*textColor && textColor,*/]}>
                            {text}
                        </Text>
                    </View>
                </View>

                :
                <View style={[{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',

                }]}>
                    <BouncyCheckbox
                        size={24}
                        isChecked={false}
                        fillColor={Colors.iconBlue}
                        iconStyle={{
                            borderWidth: border,
                            borderColor: '#8F8F8F',
                            borderRadius: borderRadius,
                        }}
                        onPress={() => {
                            setAgree(!agree)
                            setBorder(border === 2 ? 0 : 2)
                            console.log(agree)
                        }}
                    />
                    <Text style={[
                        Fonts.textMedium16,
                        /* textStyle && textStyle,*/
                        Fonts.textCenter,
                        /*textColor && textColor,*/]}>
                        Label
                    </Text>
                </View>}

        </View>

    );
}
CCheckbox.defaultProps = {
    title: undefined,
    text: 'Label',
    borderRadius: 0
}
export default CCheckbox
/*
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
    },
    text: {
        lineHeight: 30,
        marginLeft: 8,
    },
});*/
