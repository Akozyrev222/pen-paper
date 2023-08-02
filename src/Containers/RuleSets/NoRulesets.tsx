import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View, TextInput, FlatList } from "react-native";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/Hooks';
import Settings from "@/Components/PageNameComponent/PageNameComponent";
import CInput from "@/Components/Input";
import CButton from "@/Components/Button";

const NoRulesets = ({ navigation }: any) => {
  const { t } = useTranslation();
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();

  return (
    <View style={[Layout.fill, Common.background]}>
      <SafeAreaView style={[Layout.fill, Common.screenWrapper, Gutters.x16HMargin]}>
        <View>
          <Settings
            text="Rulesets"
          />
        </View>
        <View style={[Layout.center]}>
          <CInput
            placeholder="Search for ruleset"
            iconName="icon-search"
          />
        </View>
        <View style={[Layout.center, Layout.fill]}>
          <Text style={[Fonts.textRegular16, Fonts.textColorAdditional]}>Create your first ruleset</Text>
        </View>
        <View style={[Layout.center, Gutters.x32BMargin]}>
          <CButton
            text="Create new rulset"
            textColor={[Fonts.textColorBlack]}
            onPress={() => navigation.navigate("Rulesets")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NoRulesets;
