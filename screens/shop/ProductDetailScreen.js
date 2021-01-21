import React from "react";
import { useSelector } from "react-redux";
import {
	ScrollView,
	View,
	Text,
	Image,
	Button,
	StyleSheet,
} from "react-native";

import Colours from "../../constants/Colours";

const ProductDetailScreen = (props) => {
	const productId = props.navigation.getParam("productId");
	const selectedProduct = useSelector((state) =>
		state.products.availableProducts.find((product) => product.id === productId)
	);

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
			<View style={styles.actions}>
				<Button
					color={Colours.primary}
					title="Add to Cart"
					onPress={() => {}}
				/>
			</View>
			<Text style={styles.price}>£{selectedProduct.price.toFixed(2)}</Text>
			<Text style={styles.description}>{selectedProduct.description}</Text>
		</ScrollView>
	);
};

ProductDetailScreen.navigationOptions = (navData) => {
	return {
		headerTitle: navData.navigation.getParam("productTitle"),
	};
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	actions: {
		marginVertical: 10,
		alignItems: "center",
	},
	price: {
		fontFamily: "open-sans-bold",
		fontSize: 20,
		color: "#888",
		textAlign: "center",
		marginVertical: 20,
	},
	description: {
		fontFamily: "open-sans",
		fontSize: 14,
		textAlign: "center",
		marginHorizontal: 20,
	},
});

export default ProductDetailScreen;
