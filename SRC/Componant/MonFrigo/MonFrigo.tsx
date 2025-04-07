import React from "react";
import { Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import Frigo from "../../assets/frigo.png";

function MonFrigo() {
	return (
		<ImageBackground source={Frigo} style={styles.containerMonFrigo}>
			<ScrollView contentContainerStyle={styles.content}>
				<Text style={styles.text1}>Voici ton Frigo:</Text>
				<Text style={styles.text}>
					Tu retrouves tes produits de ton frigo, surveille leur date de
					consommation.
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
	text1: {
		color: "#294651",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 80,
		marginTop: 120,
	},
	text: {
		color: "#294651",
		fontFamily: "JetBrainsMono-Variable",
		fontSize: 24,
		marginBottom: 10,
		fontWeight: "bold",
	},
});

export default MonFrigo;
