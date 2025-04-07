import React from "react";
import { Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import Frigo from "../../assets/frigo.png";

function MonFrigo() {
	return (
		<ImageBackground source={Frigo} style={styles.containerMonFrigo}>
			<ScrollView contentContainerStyle={styles.content}>
				<Text style={styles.text}>Voici ton Frigo:</Text>
				<Text style={styles.text}>
					Tu prends en photo ton aliment dans ton frigo
				</Text>
			</ScrollView>
		</ImageBackground>
	);
}

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
	text: {
		color: "white",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 16,
		marginBottom: 10,
	},
});

export default MonFrigo;
