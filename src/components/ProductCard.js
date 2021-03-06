import React from 'react'
import { View, StyleSheet } from 'react-native'
import MyTextComponent from './MyTextComponent'

styles = StyleSheet.create({
    container: {
        height: 277,
        width: 150,
        margin: 10

    },
    img: {
        height: 200,
        width: 150,
        backgroundColor: '#f8f8f8',
    }
})


export default function ProductCard({ name, price }) {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
            </View>
            <MyTextComponent style={{ marginTop: 5 }}>{name}</MyTextComponent>
            <MyTextComponent style={{ marginTop: 5 }}>{price}</MyTextComponent>
        </View>
    )
}
