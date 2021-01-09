import * as React from "react"
import Svg, { Path } from "react-native-svg"

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
            <Path
                d="M26 13c0-7.18-5.82-13-13-13S0 5.82 0 13c0 6.489 4.754 11.867 10.969 12.842v-9.084H7.668V13h3.3v-2.864c0-3.258 1.942-5.058 4.911-5.058 1.422 0 2.91.254 2.91.254v3.2h-1.64c-1.614 0-2.118 1.001-2.118 2.03V13h3.606l-.577 3.758h-3.029v9.084C21.246 24.867 26 19.49 26 13z"
                fill="#1877F2"
            />
            <Path
                d="M18.06 16.758L18.637 13H15.03v-2.438c0-1.028.504-2.03 2.119-2.03h1.64v-3.2s-1.489-.254-2.911-.254c-2.97 0-4.91 1.8-4.91 5.058V13H7.668v3.758h3.3v9.084c1.347.21 2.717.21 4.063 0v-9.084h3.03z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SvgComponent
