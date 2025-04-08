import type React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const PhotoUploadComponent: React.FC = () => {
	const [image, setImage] = useState<string | null>(null);

	const pickImage = async () => {
		// Demander la permission d'accéder à la galerie
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== "granted") {
			alert("Permission pour accéder à la galerie refusée!");
			return;
		}

		// Ouvrir le sélecteur d'images
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View style={styles.container}>
			<Button title="Sélectionner une photo" onPress={pickImage} />
			{image && (
				<Image
					source={{ uri: image }}
					style={styles.image}
					resizeMode="contain"
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: "center", justifyContent: "center" },
	image: { width: 300, height: 300, marginTop: 20 },
});

export default PhotoUploadComponent;
