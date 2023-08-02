import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const Apple = (props: any) => (
    <Svg
        width={20}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M14.619 0h.17c.137 1.693-.509 2.957-1.294 3.873-.77.91-1.825 1.792-3.531 1.658-.114-1.669.533-2.84 1.317-3.753.727-.852 2.06-1.61 3.338-1.778Z"
            fill="url(#a)"
        />
        <Path
            d="M19.784 17.616v.048c-.48 1.452-1.164 2.697-1.998 3.852-.762 1.048-1.696 2.46-3.363 2.46-1.441 0-2.398-.927-3.874-.952-1.562-.026-2.421.774-3.85.976h-.486c-1.049-.152-1.895-.983-2.512-1.73C1.884 20.057.48 17.201.217 13.546v-1.074C.328 9.858 1.6 7.731 3.288 6.7c.892-.548 2.118-1.015 3.482-.806.585.09 1.183.29 1.707.49.496.19 1.117.528 1.705.51.398-.011.794-.219 1.196-.365 1.176-.425 2.329-.912 3.849-.683 1.826.276 3.122 1.087 3.923 2.34-1.545.982-2.766 2.464-2.557 4.995.185 2.298 1.521 3.643 3.19 4.435Z"
            fill="url(#b)"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={12.379}
                y1={0}
                x2={12.379}
                y2={5.544}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#16E8C2" />
                <Stop offset={1} stopColor="#31B8C9" />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={10.001}
                y1={5.787}
                x2={10.001}
                y2={24}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#16E8C2" />
                <Stop offset={1} stopColor="#31B8C9" />
            </LinearGradient>
        </Defs>
    </Svg>
)

export default Apple
