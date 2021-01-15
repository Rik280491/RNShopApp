import React from "react"
import { Flatlist, View, Text, StyleSheet} from "react-native"
import { useSelector } from "react-redux"

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)
    
    return <Flatlist data={products} renderItem={itemData => <Text>{itemData.item.title}</Text>} />
}

export default ProductsOverviewScreen