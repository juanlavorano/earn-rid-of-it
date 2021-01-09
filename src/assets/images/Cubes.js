import * as React from "react"
import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import Svg, { G, Rect } from "react-native-svg"

function Cubes() {

    return (
        <Animated.View style={{
            position: 'absolute',
            top: 0,
            left: 0,

        }}>
            <Svg
                width={Dimensions.get('window').width}
                height={Dimensions.get('window').height}
                viewBox="0 0 375 812"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <G fill="#C4C4C4">
                    <Rect
                        width={210.905}
                        height={215.552}
                        rx={10}
                        transform="matrix(.22107 .97526 -.9767 .2146 328.376 560.056)"
                        fillOpacity={0.8}
                    />
                    <Rect
                        width={79.94}
                        height={82.831}
                        rx={10}
                        transform="matrix(-.33416 .94251 -.94571 -.325 110.846 529.463)"
                        fillOpacity={0.5}
                    />
                    <Rect
                        width={80.728}
                        height={82.026}
                        rx={10}
                        transform="matrix(-.86202 .50688 -.51866 -.85498 320 70.13)"
                        fillOpacity={0.5}
                    />
                    <Rect
                        width={130.707}
                        height={133.25}
                        rx={10}
                        transform="matrix(-.63281 -.7743 .78385 -.62095 228.331 453.605)"
                        fillOpacity={0.5}
                    />
                    <Rect
                        width={135.429}
                        height={138.793}
                        rx={10}
                        transform="matrix(.35645 -.93431 .93792 .34685 0 192.533)"
                        fillOpacity={0.7}
                    />
                </G>
            </Svg>
        </Animated.View >
    )
}

export default Cubes