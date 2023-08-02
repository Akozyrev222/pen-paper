import React from 'react'
import { Keyboard, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@/Hooks';

interface Props {
  children: any
  withoutFeedback?: boolean
}

const Wrapper = (props: Props) => {
  const { children, withoutFeedback } = props
  const { Fonts, Gutters, Layout, Common, Colors } = useTheme();

  return (
    <>
      {withoutFeedback ?
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={[Layout.fill, Common.background, Common.screenWrapper, Gutters.x16HPadding]}>
            <SafeAreaView style={Common.topSafeArea} />
            {children}
          </View>
        </TouchableWithoutFeedback>
        :
        <View style={[Layout.fill, Common.background, Common.screenWrapper, Gutters.x16HPadding]}>
          <SafeAreaView style={Common.topSafeArea} />
          {children}
        </View>}
    </>
  );
};

Wrapper.defaultProps = {
  withoutFeedback: false,
}

export default Wrapper
