import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const IconRulesetWithNoImage = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.433 5h-15a2.5 2.5 0 0 0-2.5 2.5V23a.5.5 0 1 0 1 0V7.5a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1-3 0V26a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-21a2.5 2.5 0 0 0-2.5-2.5Zm-19 25a1.5 1.5 0 0 1-1.5-1.5V26h18v2.5a2.5 2.5 0 0 0 .5 1.5h-17Z"
      fill="url(#a)"
    />
    <Path d="M20.933 11a.5.5 0 0 0 0-1h-8a.5.5 0 1 0 0 1h8Z" fill="url(#b)" />
    <Path
      d="M9.933 13.5a.5.5 0 0 0 .5.5h10.5a.5.5 0 0 0 0-1h-10.5a.5.5 0 0 0-.5.5Z"
      fill="url(#c)"
    />
    <Path
      d="M10.433 17h10.5a.5.5 0 0 0 0-1h-10.5a.5.5 0 1 0 0 1Z"
      fill="url(#d)"
    />
    <Path
      d="M10.433 20h10.5a.5.5 0 0 0 0-1h-10.5a.5.5 0 1 0 0 1Z"
      fill="url(#e)"
    />
    <Path
      d="M10.433 23h8.5a.5.5 0 0 0 0-1h-8.5a.5.5 0 1 0 0 1Z"
      fill="url(#f)"
    />
    <Path
      d="M27.433 1h-15a2.5 2.5 0 0 0-2.5 2.5.5.5 0 1 0 1 0 1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1-1.5 1.5.5.5 0 1 0 0 1 2.5 2.5 0 0 0 2.5-2.5v-21a2.5 2.5 0 0 0-2.5-2.5Z"
      fill="url(#g)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={13.933}
        y1={5}
        x2={13.933}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={16.933}
        y1={10}
        x2={16.933}
        y2={11}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={15.683}
        y1={13}
        x2={15.683}
        y2={14}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={15.683}
        y1={16}
        x2={15.683}
        y2={17}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={15.683}
        y1={19}
        x2={15.683}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={14.683}
        y1={22}
        x2={14.683}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={19.933}
        y1={1}
        x2={19.933}
        y2={27}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default IconRulesetWithNoImage
