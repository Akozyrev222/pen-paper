import React from 'react'
import Icomoon from 'react-native-icomoon'
import type { IconMoonProps } from 'react-native-icomoon'

type IconProps = Omit<IconMoonProps, 'iconSet'>

export default function Icon({ name, ...restProps }: IconProps) {
  return (
    <Icomoon
      iconSet={require('@/Assets/Icons/Icomoon/selection.json')}
      name={name}
      {...restProps}
    />
  )
}
