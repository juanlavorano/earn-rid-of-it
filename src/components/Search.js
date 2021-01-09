import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

const styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20
    }
})

export default function Search() {
    const [search, setSearch] = useState('')
    return (
        <View style={styles.page}>
            <SearchBar
                inputStyle={{ backgroundColor: 'white' }}
                inputContainerStyle={{ backgroundColor: 'transparent' }}
                containerStyle={{
                    backgroundColor: 'white',
                    borderColor: '#c4c4c4',
                    borderTopColor: '#c4c4c4',
                    borderBottomColor: '#c4c4c4',
                    borderRadius: 50,
                    borderWidth: 1,
                    width: '90%',
                    height: 50,
                    justifyContent: 'center'
                }}
                placeholder={'Search...'}
                onChangeText={setSearch}
                value={search}
                showLoading={false}
            />
        </View>
    )
}
