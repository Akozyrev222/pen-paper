import { StyleSheet } from 'react-native'
import { CommonParams } from '@/Theme/theme'

export default function <C>({ Colors, Gutters, Layout }: CommonParams<C>) {
  const base = {
    ...Layout.center,
    height: 48,
    backgroundColor: Colors.primary,
  }
  const rounded = {
    ...base,
    borderRadius: 24,
    width: 200,
  }

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  })
}
