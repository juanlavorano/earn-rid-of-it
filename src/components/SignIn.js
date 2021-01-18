import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import MyTextComponent from './MyTextComponent'
import api from './api'
import { useAuth } from './AuthContext'

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(196, 196, 196, 0.2)',
    },
    container: {
        top: '10%',
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: 300,
        margin: 10,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#0E6154',
        alignSelf: 'center',
        margin: 20
    },
    error: {
        height: 50,
        width: '70%',
        borderRadius: 3,
        backgroundColor: '#D8000C',
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { currentUser, setCurrentUser } = useAuth()

    const handlePress = async () => {
        setError('')
        if (!email || !password) {
            setError('A field is empty')
        } else {
            await api.post('/user/login', {
                email: email,
                password: password
            })
                .then((res) => {
                    if (res.status == 200) {
                        setCurrentUser(res.data)
                        setError('')
                        navigation.navigate('Home')
                    }
                })
                .catch((res) => {
                    if (res.status == 400 || 404) { setError('Email or password incorrect') }
                })
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <MyTextComponent style={{ fontSize: 20, margin: 10 }}>Sign In</MyTextComponent>
                {error ?
                    <View style={styles.error}>
                        <MyTextComponent style={{ fontSize: 20, color: '#fdfdfd' }}>
                            {error}
                        </MyTextComponent>
                    </View>
                    :
                    <View />

                }
                <View style={styles.input}>
                    <Input
                        placeholder='Email'
                        value={email}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={setEmail}
                        leftIcon={
                            <Icon
                                name='at'
                                color='#0E6154'
                                size={24}
                            />
                        }
                    />
                    <Input
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='#0E6154'
                            />
                        }
                        secureTextEntry={true} />
                    <Button buttonStyle={styles.button} title='Sign In' onPress={() => handlePress()} />

                    < MyTextComponent > Forgot your password ? Don't worry</MyTextComponent>
                </View>
            </View>
        </View>
    )
}
