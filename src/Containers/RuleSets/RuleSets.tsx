import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/Hooks';
import CInput from "@/Components/Input";
import CButton from "@/Components/Button";
import CModalEdit from "@/Components/ModalEdit";
import CRulesets from "@/Components/Rulesets";
import { useForm } from "react-hook-form";
import Settings from "@/Components/PageNameComponent/PageNameComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchRulesets } from "@/Services/modules/rulesets/fetchOne";
import Wrapper from "@/Components/Wrapper";

const RuleSets = ({ navigation }: any) => {
  const { t } = useTranslation();
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const [modalEdit, setModalEdit] = useState(false);

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      search: '',
    },
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const { user, userLoading } = useSelector((state) => state?.users);
  const { rulesets, rulesetsLoading } = useSelector((state) => state?.rulesets);

  useEffect(() => {
    dispatch(fetchRulesets({ doc: user.uid }));
  }, []);

  const renderItem = ({ item }) => {
    return (
        <View style={[Gutters.x48BMargin]}>
          <CRulesets
            name={item.name}
            item={item}
          />
        </View>
    );
  };

  return (
    <Wrapper>
      <>
        <View>
          <Settings
            text="Rulesets"
          />
        </View>

        <View style={[Layout.center]}>
          <CInput
            placeholder="Search for ruleset"
            name={"search"}
            control={control}
            error={errors?.search}
            iconName={"icon-search"}
          />
        </View>

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
        />

        <CButton
          containerStyles={[Common.bottomButton, Layout.center]}
          text="Create new ruleset"
          textColor={[Fonts.textColorBlack]}
          onPress={() => navigation.navigate("NewRulesets")}
        />

        <CModalEdit
          isVisible={modalEdit}
          setVisible={setModalEdit}
          textFirst="Edit"
          textSecond="Delete"
        />
      </>
    </Wrapper>
  );
};

export default RuleSets;
