import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const IconRadioButtonEmpty = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={11} stroke="#8F8F8F" strokeWidth={2} />
  </Svg>
)

export default IconRadioButtonEmpty
