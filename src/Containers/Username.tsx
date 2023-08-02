import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {useTheme} from '@/Hooks';
import CInput from "@/Components/Input";
import CButton from "@/Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/Services/modules/users/updateOne";
import { useForm } from "react-hook-form";
import { Debounce } from "@/Hooks/Debounce";
import Wrapper from "@/Components/Wrapper";

interface UsernameForm {
  username: string;
}

const Username = ({ navigation, route }) => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state?.users)

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
    },
    mode: "onChange",
  });

  const createUsername = (data) => {
    dispatch(updateUser({doc: user.uid, data})).then((updateRes: object) => {
      if (updateRes.type === 'users/updateUser/fulfilled') {
        navigation.navigate('Home')
      }
    })
  }

  const createUsernameHandler = Debounce(handleSubmit(data => createUsername(data)), 500)

  return (
    <Wrapper withoutFeedback={true}>
      <View style={[Layout.fill, Layout.center, Layout.justifyContentBetween]}>
        <Text style={[Fonts.textBold24, Gutters.x32TPadding]}>Create your profile</Text>
        <CInput
          placeholder="My username"
          title="Username"
          name={"username"}
          control={control}
          rules={{ required: 'Required field' }}
          error={errors?.username}
        />
        <View style={[Layout.alignItemsCenter, Gutters.x32BPadding]}>
          <CButton
            onPress={() => createUsernameHandler()}
            textColor={[Fonts.textColorBlack]}
            text="Create profile"
            width={312}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Username;
