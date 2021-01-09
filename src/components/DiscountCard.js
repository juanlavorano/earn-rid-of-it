import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyTextComponent from './MyTextComponent'

styles = StyleSheet.create({
    container: {
        height: 277,
        width: 150,
        margin: 15

    },
    img: {
        height: 200,
        width: 150,
        backgroundColor: '#f8f8f8',
    }
})


export default function DiscountCard({ name, price, oldPrice }) {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
            </View>
            <MyTextComponent style={{ marginTop: 10 }}>{name}</MyTextComponent>
            <View style={{ flexDirection: 'row' }}>
                <MyTextComponent style={{
                    marginTop: 10, textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    marginRight: 5,
                    color: '#0E6154'
                }}>{oldPrice}</MyTextComponent>
                <MyTextComponent style={{ marginTop: 10 }}>{price}</MyTextComponent>
            </View>
        </View>
    )
}
