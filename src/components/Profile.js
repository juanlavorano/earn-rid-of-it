import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MyTextComponent from './MyTextComponent'
import { Avatar, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useAuth } from './AuthContext'

styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    }
})


export default function Profile() {
    const { currentUser } = useAuth()

    return (
        <View style={styles.page}>
            <MyTextComponent style={{ fontSize: 20, margin: 20 }}>My Profile</MyTextComponent>
            <View style={{ alignItems: 'center' }}>
                <Avatar
                    size="xlarge"
                    rounded
                    title="JL"
                    containerStyle={{
                        backgroundColor: 'rgb(196, 196, 196)'
                    }}
                />
                <MyTextComponent style={{ fontSize: 30, margin: 10 }}>{currentUser.firstName}</MyTextComponent>
                <MyTextComponent style={{ marginBottom: 20 }}>{currentUser.email}</MyTextComponent>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'rgba(196, 196, 196, 0.2)', height: '100%' }}>
                <View style={{ backgroundColor: '#fff', width: '100%', marginTop: 20 }}>
                    <ListItem topDivider bottomDivider>
                        <Icon
                            name='heart'
                            color='#0E6154'
                            size={20}
                        />
                        <MyTextComponent style={{ fontSize: 15, flex: 1 }}>My favourites</MyTextComponent>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon
                            name='credit-card'
                            color='#0E6154'
                            size={20}
                        />
                        <MyTextComponent style={{ fontSize: 15, flex: 1 }}>Balance</MyTextComponent>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon
                            name='shopping-bag'
                            color='#0E6154'
                            size={20}
                        />
                        <MyTextComponent style={{ fontSize: 15, flex: 1 }}>My orders</MyTextComponent>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon
                            name='tshirt'
                            color='#0E6154'
                            size={20}
                        />
                        <MyTextComponent style={{ fontSize: 15, flex: 1 }}>My products</MyTextComponent>
                        <ListItem.Chevron />
                    </ListItem>
                </View>
                <View style={{ backgroundColor: '#fff', width: '100%', marginTop: 20 }}>
                    <ListItem topDivider bottomDivider>
                        <Icon
                            name='cog'
                            color='#0E6154'
                            size={20}
                        />
                        <MyTextComponent style={{ fontSize: 15, flex: 1 }}>Settings</MyTextComponent>
                        <ListItem.Chevron iconStyle={{ alignSelf: 'flex-end' }} />
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon
                            name='sign-out-alt'
                            color='#0E6154'
                            size={20}
                        />
                        <MyTextComponent style={{ fontSize: 15, flex: 1 }}>Log out</MyTextComponent>
                        <ListItem.Chevron />
                    </ListItem>
                </View>
            </View>
        </View>
    )
}
