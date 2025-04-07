// SRC/NouveauProduit.tsx
import React, { useEffect, useRef, useState } from "react";
import { Platform, View, Button, StyleSheet, Text, Image } from "react-native";
import MyCamera from "./MyCamera.tsx";

const NouveauProduit: React.FC = () => {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [photoUri, setPhotoUri] = useState<string | null>(null);
	const cameraRef = useRef<any>(null);

	useEffect(() => {
		if (Platform.OS === "android" || Platform.OS === "ios") {
			(async () => {
				// Utilise un cast en any pour la méthode requestCameraPermissionsAsync
				const { status } = await (
					require("expo-camera").Camera as any
				).requestCameraPermissionsAsync();
				console.log("Status:", status);
				setHasPermission(status === "granted");
			})();
		} else {
			// Sur le web, on considère que la permission est accordée
			setHasPermission(true);
		}
	}, []);

	const takePicture = async () => {
		if (cameraRef.current) {
			const photo = await cameraRef.current.takePictureAsync();
			setPhotoUri(photo.uri);
		}
	};

	if (hasPermission === null) {
		return (
			<View style={styles.loadingContainer}>
				<Text>Demande de permission...</Text>
			</View>
		);
	}

	if (hasPermission === false) {
		return (
			<View style={styles.loadingContainer}>
				<Text>Accès à la caméra refusé</Text>
			</View>
		);
	}

	if (Platform.OS === "web") {
		return (
			<View style={styles.container}>
				<Text>La caméra n'est pas supportée sur le web.</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{photoUri ? (
				<Image
					source={{ uri: photoUri }}
					style={styles.previewImage}
					resizeMode="contain"
				/>
			) : (
				<MyCamera style={styles.camera} ref={cameraRef} type="back" />
			)}
			<Button
				title={photoUri ? "Reprendre une photo" : "Prendre une photo"}
				onPress={photoUri ? () => setPhotoUri(null) : takePicture}
			/>
			<Button
				title="Sauvegarder"
				onPress={() => console.log("Produit sauvegardé")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: "center", justifyContent: "center" },
	loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
	camera: { width: 300, height: 300 },
	previewImage: { width: 300, height: 300, borderRadius: 10, marginBottom: 20 },
});

export default NouveauProduit;
