import React from 'react'
import { Text } from 'react-native'

export default function MyTextComponent({ children, style }) {
    return (
        <Text style={{ fontFamily: 'Poppins-Regular', color: '#0E6154', ...style }}>
            {children}
        </Text>
    )
}
