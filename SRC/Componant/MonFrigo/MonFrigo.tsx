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
				<TouchableOpacity
					style={styles.addProductButton}
					onPress={() => openModal()}
				>
					<Text style={styles.buttonText}>Ajouter un Produit</Text>
				</TouchableOpacity>
				{products.map((product) => (
					<TouchableOpacity
						key={product.id}
						style={styles.productItem}
						onPress={() => openModal(product)}
					>
						<Text style={styles.textPage}>{product.name}</Text>
						<Text style={styles.textPage1}>
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
					<Text style={styles.nameProduct}>Nom du Produit</Text>
					<TextInput
						style={styles.input}
						value={currentProduct.name}
						onChangeText={(text) =>
							setCurrentProduct({ ...currentProduct, name: text })
						}
					/>
					<TouchableOpacity style={styles.button} onPress={pickImage}>
						<Text style={styles.buttonText}>Prendre une Photo</Text>
					</TouchableOpacity>
					{currentProduct.image && (
						<Image
							source={{ uri: currentProduct.image }}
							style={styles.image}
						/>
					)}
					<TouchableOpacity
						style={styles.button}
						onPress={() => setShowDatePicker(true)}
					>
						<Text style={styles.buttonText}>
							Sélectionner la Date de Péremption
						</Text>
					</TouchableOpacity>
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
	button: {
		backgroundColor: "#3F6C7D",
		padding: 10,
		borderRadius: 5,
		marginVertical: 10,
	},
	textPage: {
		color: "white",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 20,
	},
	textPage1: {
		color: "white",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 16,
	},
	addProductButton: {
		color: "white",
		marginTop: 40,
		fontSize: 24,
		padding: 10,
		width: 200,
		marginHorizontal: "auto",
		borderRadius: 5,
		backgroundColor: "#3F6C7D",
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		padding: 20,
	},
	nameProduct: {
		color: "white",
		marginBottom: 10,
		fontSize: 18,
		fontFamily: "JetBrainsMono-Variable",
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontFamily: "JetBrainsMono-Variable",
	},
	text1: {
		color: "#294651",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 120,
	},
	text: {
		color: "#294651",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 18,
		marginBottom: 10,
		marginTop: 50,
		fontWeight: "bold",
	},
	modalContainer: {
		fontFamily: "JetBrainsMono-Variable",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	input: {
		height: 40,
		borderColor: "white",
		fontFamily: "JetBrainsMono-Variable",
		borderWidth: 1,
		margin: 10,
		paddingHorizontal: 8,
		width: "80%",
		color: "white",
		marginBottom: 20,
	},
	image: {
		width: 200,
		height: 200,
		margin: 20,
		marginBottom: 20,
	},
	productItem: {
		margin: 10,
		fontFamily: "JetBrainsMono-Variable",
		color: "white",
		padding: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,

		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	productImage: {
		width: 50,
		height: 50,
	},
});

export default MonFrigo;
