import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import MyTextComponent from './MyTextComponent'
import Icon from 'react-native-vector-icons/FontAwesome5'

const styles = {
    page: {
        height: '100%',
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    },
    card: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        height: 150,
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    image: {
        backgroundColor: '#d8d8d8',
        height: '100%',
        width: 130,
    },
    info: {
        marginBottom: 20,
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    },
    delete: {
        backgroundColor: '#d8d8d8',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: '#fdfdfd'
    }
}

function Card({ name, price, oldPrice }) {
    return (
        <View style={styles.card}>
            <View style={styles.image} />
            <View style={styles.info}>
                <MyTextComponent style={{ fontSize: 20 }}>Product Name</MyTextComponent>
                <MyTextComponent style={{ fontSize: 15 }}>€15</MyTextComponent>
            </View>
            <View style={styles.delete}>
                <Icon name='times' style={styles.icon} size={25} />
            </View>
        </View>
    )
}

export default function Favourites({ navigation }) {

    return (
        <View style={styles.page}>
            <MyTextComponent style={{ fontSize: 20, margin: 20 }}>My Favourites</MyTextComponent>
            <Card />
            <Card />
        </View>
    )
}
