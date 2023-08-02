import * as React from "react"
import Svg, {
  Circle,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

const IconUploadImage = (props) => (
  <Svg
    width={88}
    height={87}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={44} cy={43.5} r={43} stroke="#21D5C5" />
    <G clipPath="url(#a)">
      <Path
        d="M51.496 40.823a8.249 8.249 0 0 0-16.228 1.41 4.5 4.5 0 0 0 .75 8.939h3.75v-1.5h-3.75a3 3 0 0 1 0-6 .75.75 0 0 0 .75-.75 6.75 6.75 0 0 1 13.371-1.312.75.75 0 0 0 .637.6 3.75 3.75 0 0 1-.51 7.462h-3v1.5h3a5.25 5.25 0 0 0 1.23-10.35Z"
        fill="url(#b)"
      />
      <Path
        d="m42.985 43.89-3 3 1.057 1.057 1.725-1.717v7.191h1.5V46.23l1.717 1.717 1.058-1.057-3-3a.75.75 0 0 0-1.057 0Z"
        fill="url(#c)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={43.5}
        y1={34.58}
        x2={43.5}
        y2={53.421}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={43.5}
        y1={34.58}
        x2={43.5}
        y2={53.421}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#16E8C2" />
        <Stop offset={1} stopColor="#31B8C9" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(31.5 32)" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default IconUploadImage