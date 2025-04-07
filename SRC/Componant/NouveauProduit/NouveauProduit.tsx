// SRC/NouveauProduit.tsx
import React, { useEffect, useRef, useState } from "react";
import { View, Button, StyleSheet, Text, Image } from "react-native";
import * as ExpoCamera from "expo-camera";

// On extrait le composant Camera et on le cast en React.ComponentType
const CameraComponent = ExpoCamera.Camera as React.ComponentType<any>;

const NouveauProduit: React.FC = () => {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [photoUri, setPhotoUri] = useState<string | null>(null);

	// On utilise ici une ref typée en "any" pour contourner les problèmes de typage
	const cameraRef = useRef<any>(null);

	useEffect(() => {
		(async () => {
			const { status } = await ExpoCamera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
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

	return (
		<View style={styles.container}>
			{photoUri ? (
				<Image source={{ uri: photoUri }} style={styles.previewImage} />
			) : (
				<CameraComponent style={styles.camera} ref={cameraRef} type="back" />
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
	previewImage: {
		width: 300,
		height: 300,
		borderRadius: 10,
		resizeMode: "contain",
		marginBottom: 20,
	},
});

export default NouveauProduit;
