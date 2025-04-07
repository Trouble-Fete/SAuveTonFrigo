import React from "react";
import {
	ScrollView,
	Image,
	View,
	Text,
	StyleSheet,
	Button,
} from "react-native";
import STF from "../assets/logo_STF.png";

function Home() {
	return (
		<ScrollView style={styles.container}>
			<Image source={STF} style={styles.logo} />
			<Text style={styles.text1}>Le concept est simple:</Text>
			<Text style={styles.text}>
				Tu prends en photo ton aliment dans ton frigo
			</Text>
			<Text style={styles.text}>tu mets la date de péremption</Text>
			<Text style={styles.text}>
				Ensuite c'est simple, on s'occupe de tout. On te prévient des produits à
				consommer rapidement afin de ne pas gaspiller ton argent, et sauver la
				planète!
			</Text>
			<Text style={styles.text}>Pratique non?? à toi de jouer!</Text>
			<Button
				title="Commencer maintenant"
				onPress={() => {
					// entrer l'effet du boutton
					console.log("Bouton cliqué !");
				}}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3F6C7D",
		flex: 1,
	},
	logo: {
		width: "98%",
		height: "100%",
		resizeMode: "cover",
	},
	text: {
		color: "white",
		fontSize: 24,
		fontFamily: "JetBrainsMono-Variable",
		padding: 5,
	},
	text1: {
		color: "white",
		fontSize: 24,
		fontFamily: "JetBrainsMono-Variable",
		margin: 10,
		padding: 10,
	},
});

export default Home;
