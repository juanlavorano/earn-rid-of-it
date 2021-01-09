import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import MyTextComponent from './MyTextComponent'
import ProductCard from './ProductCard'
import DiscountCard from './DiscountCard'
import { useAuth } from './AuthContext'

styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    subtitle: {
        margin: 10,
        fontSize: 20,
        color: '#0E6154'
    },
    carrousel: {
        flexDirection: 'row',
    }
})


export default function Home({ navigation }) {
    const { currentUser } = useAuth()

    const [products, setProducts] = useState([
        { name: 'Shoes', price: '€25' },
        { name: 'Shirt', price: '€10' },
        { name: 'Pants', price: '€15' },
    ])
    const [saleProducts, setSaleProducts] = useState([
        { name: 'Shoes', oldPrice: '€25', price: '€20' },
        { name: 'Shirt', oldPrice: '€10', price: '€6' },
        { name: 'Pants', oldPrice: '€15', price: '€10' },
    ])

    useEffect(() =>
        console.log(currentUser)
        , [])

    return (
        <View style={styles.page}>
            <View style={{ height: '100%' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MyTextComponent style={{ fontSize: 30, margin: 10, color: '#0E6154' }}>Home</MyTextComponent>
                    {/* Sale */}
                    <View style={{ backgroundColor: '#47CCB8' }}>
                        <MyTextComponent style={styles.subtitle}>Sale</MyTextComponent>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            style={styles.carrousel}>
                            <View style={{ flexDirection: 'row' }}>
                                {saleProducts.map(product => {
                                    return <DiscountCard name={product.name} price={product.price} oldPrice={product.oldPrice} />
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    {/* Recommended for you */}
                    <MyTextComponent style={styles.subtitle}>Recommended for you</MyTextComponent>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        style={styles.carrousel}>
                        <View style={{ flexDirection: 'row' }}>
                            {products.map(product => {
                                return <ProductCard name={product.name} price={product.price} />
                            })}
                        </View>
                    </ScrollView>
                    {/* Trending */}
                    <MyTextComponent style={styles.subtitle}>Trending</MyTextComponent>
                    <ScrollView
                        style={styles.carrousel}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            {products.map(product => {
                                return <ProductCard name={product.name} price={product.price} />
                            })}
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        </View>
    )
}
