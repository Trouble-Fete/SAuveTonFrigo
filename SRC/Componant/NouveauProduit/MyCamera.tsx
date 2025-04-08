// biome-ignore lint/style/useImportType: <explanation>
import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Camera } from "expo-camera";

const CameraComponent: React.FC = () => {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const cameraRef = useRef<Camera>(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	const takePicture = async () => {
		if (cameraRef.current) {
			const photo = await cameraRef.current.takePictureAsync();
			console.log("Photo URI:", photo.uri);
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
			<Camera style={styles.camera} type="back" ref={cameraRef} />
			<View style={styles.buttonContainer}>
				<Button title="Prendre une photo" onPress={takePicture} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
	loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
	camera: { flex: 1 },
	buttonContainer: {
		position: "absolute",
		bottom: 20,
		left: 0,
		right: 0,
		flexDirection: "row",
		justifyContent: "center",
	},
});

export default CameraComponent;
