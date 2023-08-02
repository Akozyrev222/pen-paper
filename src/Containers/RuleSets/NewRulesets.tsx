import React from "react";
import { ActivityIndicator, View, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/Hooks';
import Settings from "@/Components/PageNameComponent/PageNameComponent";
import CInput from "@/Components/Input";
import CButton from "@/Components/Button";
import {Avatar} from '@/Components/PickerImage/PickerImage';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import { useForm } from "react-hook-form";
import { Debounce } from "@/Hooks/Debounce";
import Wrapper from "@/Components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "@/Services/modules/images/uploadImage";
import { createRuleset } from "@/Services/modules/rulesets/createOne";
import { fetchRulesets } from "@/Services/modules/rulesets/fetchOne";

const NewRulesets = ({ navigation }: any) => {
  const { t } = useTranslation();
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.users)
  const { imagesLoading } = useSelector((state) => state?.images)
  const { rulesetsLoading } = useSelector((state) => state?.rulesets)
  const startIcon = 'data:image/png;base64,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'

  const [imageData, setImageData] = React.useState(null);

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      rulesetName: '',
    },
    mode: "onChange",
  });

  const onAvatarChange = (avatar: ImageOrVideo) => {
    setImageData(avatar);
  };

  const createRulesetFunction = async (data) => {
    if (imageData?.path) {
      dispatch(uploadImage({imageData})).then((uploadRes: object)=> {
        if (uploadRes?.type === 'images/uploadImage/fulfilled') {
          dispatch(createRuleset({
            data: {
              userId: user.uid,
              name: data.rulesetName,
              image: uploadRes.payload,
            },
          })).then((createRes) => {
            if (createRes?.type === 'rulesets/createRuleset/fulfilled') {
              dispatch(fetchRulesets({ doc: user.uid }))
              navigation.navigate('Rulesets')
            }
          });
        }
      })
    } else {
      dispatch(createRuleset({
        data: {
          userId: user.uid,
          name: data.rulesetName,
          image: '',
        }}))
    }
  }

  const createRulesetHandler = Debounce(handleSubmit(data => createRulesetFunction(data)), 500, [imageData, user])

  return (
    <Wrapper withoutFeedback={true}>
      <>
        <View>
          <Settings
            text="New rulesets"
          />
        </View>
        <View style={[Layout.center, Gutters.x80BMargin, Layout.fill]}>
          <TouchableOpacity>
            <View style={styles.scroll}>
              <Avatar
                onChange={onAvatarChange}
                source={{uri: startIcon}}
              />
            </View>
          </TouchableOpacity>
          <View style={[Layout.center, Gutters.x24TPadding]}>
            <CInput
              placeholder="Enter name"
              title="Ruleset name"
              name={"rulesetName"}
              control={control}
              rules={{ required: 'Required field' }}
              error={errors?.rulesetName}
            />
          </View>
        </View>
        <View style={[Layout.center, Gutters.x32BMargin]}>
          <CButton
            text="Create"
            textColor={[Fonts.textColorBlack]}
            onPress={() => createRulesetHandler()}
          />
        </View>

        {(imagesLoading || rulesetsLoading) &&
          <View style={Common.loading}>
            <ActivityIndicator size='large' />
          </View>
        }
      </>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  scroll: {
    borderRadius: 50
  }
});

export default NewRulesets;