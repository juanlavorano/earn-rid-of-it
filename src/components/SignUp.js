import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import MyTextComponent from './MyTextComponent'
import api from './api'
import { useAuth } from './AuthContext'

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(196, 196, 196, 0.2)'

    },
    container: {
        top: '50%',
        alignItems: 'center',
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
        alignSelf: 'center'
    },
    error: {
        height: 50,
        width: '70%',
        borderRadius: 3,
        backgroundColor: '#D8000C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    success: {
        height: 50,
        width: '70%',
        borderRadius: 3,
        backgroundColor: '#4F8A10',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default function SignUp({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { currentUser, setCurrentUser } = useAuth()

    async function handlePress() {
        const user = {
            firstName,
            lastName,
            email,
            password
        }
        setLoading(true)
        setError('')
        setSuccess('')
        if (password != confirmPassword) {
            setError('Passwords should match')
        } else {
            await api.post('/user/register', user)
                .then((res) => {
                    if (res.status == 200) {
                        setLoading(false)
                        navigation.navigate('Home')
                        setCurrentUser(user)
                    }
                })
                .catch(error => {
                    setLoading(false)
                    setSuccess('')
                    setError(error.message)
                    console.log(error.message)
                })
        }
    }

    return (
        <View stlye={styles.screen}>
            <View style={styles.container} >
                <MyTextComponent style={{ fontSize: 20, margin: 10 }}>Join us!</MyTextComponent>
                {/* Error display */}
                {error ?
                    <View style={styles.error}>
                        <MyTextComponent style={{ fontSize: 20, color: '#fdfdfd' }}>
                            {error}
                        </MyTextComponent>
                    </View>
                    :
                    <View />

                }
                {success ?
                    <View style={styles.success}>
                        <MyTextComponent style={{ fontSize: 20, color: '#fdfdfd' }}>
                            {success}
                        </MyTextComponent>
                    </View>
                    :
                    <View />

                }


                <View style={styles.input}>
                    <View style={{ flexDirection: 'row' }}>
                        <Input
                            containerStyle={{ width: '50%' }}
                            placeholder='Name'
                            value={firstName}
                            onChangeText={setFirstName}
                        />
                        <Input
                            containerStyle={{ width: '50%' }}
                            placeholder='Last Name'
                            value={lastName}
                            onChangeText={setLastName}
                        />
                    </View>
                    <Input
                        autoCapitalize='none'
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Input
                        placeholder="Confirm Passowrd"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title='Sign Up'
                        disabled={loading}
                        onPress={() => handlePress()}
                    />
                </View>
            </View>
        </View>
    )
}
