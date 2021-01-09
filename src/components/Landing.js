import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import Cubes from '../assets/images/Cubes'
import Logo from '../assets/images/Logo'
import MyTextComponent from './MyTextComponent'
import Facebook from '../assets/icons/Facebook'
import Google from '../assets/icons/Google'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(196, 196, 196, 0.2)',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        height: 50,
        width: 190,
        alignItems: "center",
    },
    button: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        height: 50,
        width: 190,
        alignItems: "center",

    }

})

export default function Landing({ navigation }) {
    return (
        <View style={styles.container}>
            <Cubes />
            {/* Earn Rid of it */}
            <View style={styles.content}>
                <Logo width={100} height={100} />

                {/* Sing up */}
                <TouchableHighlight style={styles.buttonContainer} onPress={() => navigation.navigate('Sign Up')}>
                    <View style={[styles.buttonContainer, { backgroundColor: '#36998A' }]}>
                        <MyTextComponent style={{ fontSize: 20, color: '#FDFDFD' }}>Sign up</MyTextComponent>
                    </View>
                </TouchableHighlight>

                {/* Sing in */}
                <TouchableHighlight style={styles.buttonContainer} onPress={() => navigation.navigate('Sign In')}>
                    <View style={[styles.button, { backgroundColor: '#47CCB8' }]}>
                        <MyTextComponent style={{ fontSize: 20, color: '#FDFDFD' }}>Sign in</MyTextComponent>
                    </View>
                </TouchableHighlight>

                <MyTextComponent style={{ fontSize: 20, color: '#0E6154' }}>or</MyTextComponent>

                {/* Google */}
                <TouchableHighlight style={styles.buttonContainer} onPress={console.log('press')}>
                    <View style={[styles.buttonContainer, { backgroundColor: '#FDFDFD', flexDirection: 'row' }]}>
                        <Google />
                        <MyTextComponent style={{ fontSize: 20, marginLeft: 10 }}>Google</MyTextComponent>
                    </View>
                </TouchableHighlight>

                {/* Facebook */}
                <TouchableHighlight style={styles.buttonContainer}>
                    <View style={[styles.buttonContainer, { backgroundColor: '#FDFDFD', flexDirection: 'row' }]}>
                        <Facebook />
                        <MyTextComponent style={{ fontSize: 20, marginLeft: 10 }}>Facebook</MyTextComponent>
                    </View>
                </TouchableHighlight>
            </View>
        </View >
    )
}
