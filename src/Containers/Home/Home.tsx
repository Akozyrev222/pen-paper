import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Pressable,
    FlatList
} from "react-native";
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/Hooks';
import CButton from "@/Components/Button";
import CModal from "@/Components/Modal";
import CInput from "@/Components/Input";
import CModalMenu from "@/Components/ModalMenu";
import CModalEdit from "@/Components/ModalEdit";
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from "react-hook-form";
import IconButton from "@/Components/IconButton/IconButton";
import {fetchRulesets} from "@/Services/modules/rulesets/fetchOne";
import CRulesets from "@/Components/Rulesets";
import Wrapper from "@/Components/Wrapper";
import CDropdown from "@/Components/Dropdown/Dropdown";

const Home = ({navigation}) => {
    const {t} = useTranslation();
    const {Common, Fonts, Gutters, Layout, Colors} = useTheme();

    const {handleSubmit, control, formState: {errors}} = useForm({
        defaultValues: {
            search: "",
        },
        mode: "onChange",
    });

    const [testModal, setTestModal] = useState(false);
    const [testModalMenu, setTestModalMenu] = useState(false);
    const [testModalEdit, setTestModalEdit] = useState(false);

    const onPressNavigate = (name) => {
        navigation.navigate(name);
    };

    const dispatch = useDispatch();

    const {user, userLoading} = useSelector((state) => state?.users);
    const {rulesets, rulesetsLoading} = useSelector((state) => state?.rulesets);

    useEffect(() => {
        dispatch(fetchRulesets({doc: user.uid}));
    }, []);

    const renderItem = ({item}) => {
        return (
            <View style={[Gutters.x48BMargin]}>
                <CRulesets name={item.name} item={item}/>
            </View>
        );
    };

    return (
        <Wrapper>
            <>
                <View style={[Layout.row, Layout.justifyContentBetween]}>
                    <Text
                        style={[Fonts.textBold24, Gutters.x16BMargin, Fonts.textColorWhite]}>Hello, {user.username}
                    </Text>
                    <IconButton
                        icon={"icon-settings"}
                        size={24}
                        color={Colors.white}
                        onPress={() => onPressNavigate("Settings")}
                    />
                </View>

                <CInput
                    placeholder="Search for player or tag"
                    name={"search"}
                    control={control}
                    error={errors?.search}
                    iconName={"icon-search"}
                />
                <CDropdown
                    placeholder="Search for player or tag"
                    name={"search"}
                    control={control}
                    error={errors?.search}
                    iconName={"icon-search"}
                />

                <View style={[Layout.alignItemsCenter, Layout.rowSpaceBetween, Gutters.x32TMargin]}>
                    <Text style={Fonts.textBold20}>Your latest rulesets</Text>
                    <Pressable onPress={() => onPressNavigate("Rulesets")}>
                        <Text style={[Fonts.textRegular16, Fonts.textColorBlue]}>See all</Text>
                    </Pressable>
                </View>

                {rulesets?.length === 0 && !rulesetsLoading ?
                    <>
                        <View style={[Layout.center, Layout.fill]}>
                            <Text style={[Fonts.textRegular16, Fonts.textColorAdditional]}>Create your first
                                ruleset</Text>
                        </View>

                        <View style={[Layout.center, Gutters.x32BMargin]}>
                            <CButton
                                text="Create new ruleset"
                                textColor={[Fonts.textColorBlack]}
                                onPress={() => onPressNavigate("NewRulesets")}
                            />
                        </View>
                    </>
                    :
                    <FlatList
                        style={[Gutters.x24TMargin]}
                        data={rulesets}
                        onEndReachedThreshold={0.3}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                        renderItem={renderItem}
                        contentContainerStyle={{
                            paddingBottom: 60
                        }}
                        columnWrapperStyle={[Layout.justifyContentBetween]}
                        scrollToOverflowEnabled={true}
                        showsVerticalScrollIndicator={false}
                    />}

                <CModal
                    title={"Conditions"}
                    btnTitle={"Clear"}
                    isVisible={testModal}
                    setVisible={setTestModal}
                />
                <CModalMenu
                    title={"General info"}
                    btnTitle={"Done"}
                    isVisible={testModalMenu}
                    setVisible={setTestModalMenu}
                    placeholderFirstInput={"Enter Name"}
                    placeholderSecondInput={"Enter Age"}
                />
                <CModalEdit
                    isVisible={testModalEdit}
                    setVisible={setTestModalEdit}
                    textFirst="Make public"
                    textSecond="Add tag"
                    textThird="Delete"
                />
            </>
        </Wrapper>
    );
};

export default Home;
