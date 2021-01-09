import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={26}
            height={26}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M25.747 13.3c0-.884-.072-1.773-.225-2.642H13.26v5.006h7.022a6.018 6.018 0 01-2.599 3.95v3.249h4.19c2.46-2.265 3.873-5.608 3.873-9.563z"
                    fill="#4285F4"
                />
                <Path
                    d="M13.26 26c3.506 0 6.463-1.15 8.617-3.137l-4.189-3.249c-1.165.793-2.67 1.242-4.423 1.242-3.392 0-6.267-2.288-7.3-5.364H1.644v3.348A13.002 13.002 0 0013.26 26z"
                    fill="#34A853"
                />
                <Path
                    d="M5.961 15.492a7.787 7.787 0 010-4.977V7.166H1.643a13.011 13.011 0 000 11.674l4.318-3.348z"
                    fill="#FBBC04"
                />
                <Path
                    d="M13.26 5.145a7.064 7.064 0 014.987 1.95l3.712-3.712A12.494 12.494 0 0013.26 0C8.345 0 3.85 2.77 1.643 7.166l4.318 3.349c1.027-3.081 3.907-5.37 7.299-5.37z"
                    fill="#EA4335"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h26v26H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
