import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const IconRadioButtonChecked = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={12} fill="url(#a)" />
    <Path
      d="m9.572 15.203-3.199-3.257L5 13.344 9.572 18 19 8.399 17.627 7l-8.055 8.203Z"
      fill="#FAFAFA"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        y1={0}
        x2={12}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default IconRadioButtonChecked