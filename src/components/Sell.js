import React, { useState } from 'react'
import { View, StyleSheet, Modal, Pressable } from 'react-native'
import MyTextComponent from './MyTextComponent'
import { Input, Button } from 'react-native-elements';
import { useAuth } from './AuthContext'
import { Picker } from '@react-native-picker/picker';
import api from './api'

styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'

    },
    itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    picker: {
        width: 150
    },
    category: {

    },
    button: {
        width: 200,
        height: 50,
        margin: 20,
        backgroundColor: '#0E6154'
    }
})


export default function ProductCard() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [category, setCategory] = useState('Choose a category')
    const [modalVisible, setModalVisible] = useState(false)
    const { currentUser } = useAuth()

    const handlePress = async (e) => {
        const seller = currentUser.email
        await api.post('/item/add', {
            name,
            price,
            category,
            seller,
            description
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <View
            style={styles.page}
        >
            <MyTextComponent style={{ fontSize: 20, margin: 20 }}>My Profile</MyTextComponent>
            <View style={{ alignItems: 'center' }}>
                <MyTextComponent>Img</MyTextComponent>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'rgba(196, 196, 196, 0.2)', height: '100%' }}>
                <View style={{ backgroundColor: '#fff', width: '100%', marginTop: 20 }}>
                    <Input
                        onChangeText={setName}
                        placeholder='Name*'
                    />
                    <Input
                        onChangeText={setDescription}
                        topDivider
                        placeholder='Description*'
                    />
                </View>
                <View style={{ backgroundColor: '#fff', width: '100%', marginTop: 20 }}>
                    <Input
                        onChangeText={setPrice}
                        placeholder='Price*'
                        keyboardType='numeric'
                    />
                </View>
                <View
                    style={{ backgroundColor: '#fff', height: 50, width: '100%', marginTop: 20 }}
                    onStartShouldSetResponder={() => setModalVisible(!modalVisible)}
                >
                    <MyTextComponent style={styles.category}>
                        {category}
                    </MyTextComponent>
                    <Modal
                        transparent={true}
                        visible={modalVisible}
                        animated='slide'
                    >
                        <View

                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', flex: 1, justifyContent: 'center', padding: 20, height: 100 }}>
                            <View style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#fff', padding: 20 }}>
                                <Picker
                                    style={
                                        styles.picker
                                    }
                                    selectedValue={category}
                                    onValueChange={setCategory}>
                                    <Picker.Item label="Shirt" value="Shirt" />
                                    <Picker.Item label="Pant" value="Pant" />
                                    <Picker.Item label="Shoes" value="Shoes" />
                                    <Picker.Item label="Accessory" value="Accessory" />
                                </Picker>
                                <Pressable onPress={() => setModalVisible(false)}>
                                    <MyTextComponent>Done</MyTextComponent>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
                <Button
                    buttonStyle={styles.button}
                    title='Sell Now!'
                    onPress={() => handlePress()}
                ></Button>
            </View>
        </View>
    )
}