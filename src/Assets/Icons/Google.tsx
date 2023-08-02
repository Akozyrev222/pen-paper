import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const Google = (props) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0 12C0 5.383 5.383 0 12 0c2.672 0 5.202.86 7.315 2.486L16.526 6.11A7.357 7.357 0 0 0 12 4.57c-4.096 0-7.429 3.333-7.429 7.429S7.904 19.429 12 19.429c3.3 0 6.103-2.162 7.069-5.143H12V9.714h12V12c0 6.617-5.383 12-12 12S0 18.617 0 12Z"
            fill="url(#a)"
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

export default Google
