/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import {StyleSheet, StatusBar, Platform} from 'react-native'
import buttonStyles from './components/Buttons'
import {CommonParams} from './theme'

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        height: 48,
        width: '100%',
        borderRadius: 24,
        backgroundColor: Colors.field,
      },
      dropdown:{
        borderRadius: 22,
        width: '100%',
        backgroundColor: Colors.field,
      },
      dropdownItem: {
        height: 48,
        width: '100%',
      },
    }),
    topSafeArea: {
      flex: 0,
      backgroundColor: Colors.background,
    },
    screenWrapper: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.background,
      opacity: 0.5,
    },
    background: {
      backgroundColor: Colors.background,
    },
    modalBackground: {
      backgroundColor: Colors.bottomModals,
    },
    modalBorderRadius: {
      borderRadius: 24,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    modalMenuBorderRadius: {
      borderRadius: 24,
    },
    modalEdit: {
      width: 175,
      height: 87,
      borderRadius: 24,
      backgroundColor: Colors.modals
    },
    modalEditBackground: {
      backgroundColor: Colors.modals,
    },
    modalEditBorderRadius: {
      borderRadius: 16,
    },
    modalEditPaddingButton: {
      position: 'absolute',
      paddingTop: 315,
      paddingLeft: 110,
    },
    inputError: {
      borderWidth: 1,
      borderColor: Colors.error,
      paddingLeft: 15,
    },
    errorMessage: {
      position: 'absolute',
      top: 75,
      left: 17,
    },
    backgroundSwitchIconOn: {
      backgroundColor: Colors.iconBlue,
      height: 24,
      width: 24,
      borderRadius: 24,
    },
    backgroundSwitchIconOff: {
      backgroundColor: Colors.iconBlue,
      height: 24,
      width: 24,
      borderRadius: 16,
      marginLeft: 2.3
    },
    backgroundSwitch: {
      height: 24,
      width: 49,
      borderRadius: 16
    },
    widthContentRadioButton: {
        width: 280,
    },
    pageNameComponent: {
      marginBottom: 24
    },
    iconButton: {
      width: 40,
      height: 40,
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: Colors.bottomModals
    },
    rulsetItems: {
      width: '100%',
      height: 168,
      borderRadius: 26,
    },
    buttonRuleset: {
      width: 32,
      height: 32,
      borderRadius: 6,
    },
    bottomButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 32,
    },
  }
}
