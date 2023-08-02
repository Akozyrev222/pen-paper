import React, {Component, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    ScrollView,
    Button,
    StyleProp,
    ViewStyle,
    FlatList,
    TouchableOpacity
} from "react-native";
import {useTheme} from '@/Hooks';
import Modal from "react-native-modal";
import CButton from "@/Components/Button";
import Icon from "@/Components/Icon";
import FontsContainer from "@/Containers/Settings/FrameFonts/FontsContainer";

interface Props {
    title?: string
    btnTitle?: string
    isVisible?: boolean
    setVisible?: (visible: boolean) => void
    containerStyles?: StyleProp<ViewStyle>
    component?: React.FC
    onPressColorPicker?: () => void
}

const CModal = (props: Props) => {
    const {
        title,
        btnTitle,
        isVisible,
        setVisible,
        containerStyles,
        onPressColorPicker
    } = props

    const {Fonts, Gutters, Layout, Common, Colors} = useTheme()

    const renderItem = ({item}) => {
        return (
            <View>
                <Text style={[Fonts.textBold16, Fonts.textColorWhite, Gutters.x16BMargin]}>{item.condition}</Text>
            </View>
        );
    };

    const data = [
        {condition: 'Condition 1'},
    ];

    return (

        <Modal
            isVisible={isVisible}
            style={[
                Layout.justifyContentEnd,
                Gutters.x0VMargin,
                Gutters.x0HMargin
            ]}
            onBackButtonPress={() => setVisible(false)}
            onBackdropPress={() => setVisible(false)}
            onSwipeComplete={() => setVisible(false)}
            onSwipeThreshold={20}
            swipeDirection={["down"]}
        >
            <View
                style={[Common.modalBackground, Gutters.x24HPadding, Gutters.x24VPadding, Common.modalBorderRadius]}>
                <View style={[Layout.row, Layout.alignItemsCenter]}>
                    <View style={[Layout.fill, Layout.row, Layout.alignItemsCenter, Layout.justifyContentBetween]}>
                        <Text style={[Fonts.textBold24, Fonts.textColorWhite]}>
                            {title}
                        </Text>

                        <View style={[Layout.row, Layout.alignItemsCenter]}>
                            <CButton
                                text={btnTitle}
                                textColor={Fonts.textColorWhite}
                                textStyle={Fonts.textMedium16}
                                onPress={() => console.log("Clear")}
                                width={80}
                                border
                                innerColor={Colors.bottomModals}
                                containerStyles={[Gutters.x12RMargin]}
                            />

                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Icon name={"icon-close"} color={Colors.white} size={24}/>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
                <FontsContainer onPressColorPicker={onPressColorPicker}/>
            </View>
            {/*<View style={styles.scrollableModal}>*/}
            {/*  <ScrollView*/}
            {/*    ref={scrollViewRef}*/}
            {/*    onScroll={handleOnScroll}*/}
            {/*    scrollEventThrottle={16}>*/}
            {/*    <View style={styles.scrollableModalContent1}>*/}
            {/*      <Text style={styles.scrollableModalText1}>*/}
            {/*        You can scroll me up! 👆*/}
            {/*      </Text>*/}
            {/*    </View>*/}
            {/*    <View style={styles.scrollableModalContent2}>*/}
            {/*      <Text style={styles.scrollableModalText2}>*/}
            {/*        Same here as well! ☝*/}
            {/*      </Text>*/}
            {/*    </View>*/}
            {/*  </ScrollView>*/}
            {/*</View>*/}
        </Modal>

    );
}

const styles = StyleSheet.create({
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
});


CModal.defaultProps = {
    title: '',
    btnTitle: '',
    isVisible: false,
    containerStyles: null,
}

export default CModal
