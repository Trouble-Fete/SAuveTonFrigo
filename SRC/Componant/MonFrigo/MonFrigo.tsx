import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	ImageBackground,
	Button,
	Modal,
	TextInput,
	Image,
	TouchableOpacity,
	Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Frigo from "../../assets/frigo.png";

interface Product {
	id: number;
	name: string;
	image: string | null;
	expirationDate: Date;
}

const MonFrigo = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [currentProduct, setCurrentProduct] = useState<Product>({
		id: -1,
		name: "",
		image: null,
		expirationDate: new Date(),
	});
	const [showDatePicker, setShowDatePicker] = useState(false);

	const pickImage = async () => {
		const result = await ImagePicker.launchCameraAsync();
		if (!result.canceled) {
			setCurrentProduct({ ...currentProduct, image: result.assets[0].uri });
		}
	};

	const handleDateChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || currentProduct.expirationDate;
		setCurrentProduct({ ...currentProduct, expirationDate: currentDate });
		setShowDatePicker(Platform.OS === "ios"); // On iOS, the date picker needs to be manually closed
	};

	const saveProduct = () => {
		if (currentProduct.id === -1) {
			// Ajouter un nouveau produit
			setProducts([...products, { ...currentProduct, id: Date.now() }]);
		} else {
			// Mettre à jour le produit existant
			setProducts(
				products.map((product) =>
					product.id === currentProduct.id ? currentProduct : product,
				),
			);
		}
		setModalVisible(false);
		setCurrentProduct({
			id: -1,
			name: "",
			image: null,
			expirationDate: new Date(),
		});
	};

	const openModal = (
		product: Product = {
			id: -1,
			name: "",
			image: null,
			expirationDate: new Date(),
		},
	) => {
		setCurrentProduct(product);
		setModalVisible(true);
	};

	return (
		<ImageBackground source={Frigo} style={styles.containerMonFrigo}>
			<ScrollView contentContainerStyle={styles.content}>
				<Text style={styles.text1}>Voici ton Frigo:</Text>
				<Text style={styles.text}>
					Tu retrouves tes produits de ton frigo, surveille leur date de
					consommation.
				</Text>
				<Button title="Ajouter un Produit" onPress={() => openModal()} />
				{products.map((product) => (
					<TouchableOpacity
						key={product.id}
						style={styles.productItem}
						onPress={() => openModal(product)}
					>
						<Text>{product.name}</Text>
						<Text>
							Date de péremption: {product.expirationDate.toLocaleDateString()}
						</Text>
						{product.image && (
							<Image
								source={{ uri: product.image }}
								style={styles.productImage}
							/>
						)}
					</TouchableOpacity>
				))}
			</ScrollView>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.modalContainer}>
					<Text>Nom du Produit</Text>
					<TextInput
						style={styles.input}
						value={currentProduct.name}
						onChangeText={(text) =>
							setCurrentProduct({ ...currentProduct, name: text })
						}
					/>
					<Button title="Prendre une Photo" onPress={pickImage} />
					{currentProduct.image && (
						<Image
							source={{ uri: currentProduct.image }}
							style={styles.image}
						/>
					)}
					<Button
						title="Sélectionner la Date de Péremption"
						onPress={() => setShowDatePicker(true)}
					/>
					{showDatePicker && (
						<DateTimePicker
							value={currentProduct.expirationDate}
							mode="date"
							display="default"
							onChange={handleDateChange}
						/>
					)}
					<Button title="Enregistrer" onPress={saveProduct} />
					<Button title="Fermer" onPress={() => setModalVisible(false)} />
				</View>
			</Modal>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	containerMonFrigo: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
	content: {
		padding: 20,
	},
	text1: {
		color: "#294651",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		marginTop: 20,
	},
	text: {
		color: "#294651",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 18,
		marginBottom: 10,
		fontWeight: "bold",
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		margin: 10,
		paddingHorizontal: 8,
		width: "80%",
	},
	image: {
		width: 200,
		height: 200,
		margin: 20,
	},
	productItem: {
		margin: 10,
		padding: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
	},
	productImage: {
		width: 50,
		height: 50,
	},
});

export default MonFrigo;
